import  Trip from "../models/trip.model";
import  ActiveTrip from "../models/activeTrips.model";
import  User from "../models/user.model";
import  Reservation from "../models/reservation.model";
import { requestPasswordReset } from "./userController";
const sendEmail = require("../utils/email/sendEmail");
const ejs = require("ejs");

export const newReservation = async (req, res, next) => {
  const { rooms,tripId,total } = req.body;

  try{
const existingTrip = await ActiveTrip.findById(tripId)
if (!existingTrip || existingTrip==null) {
  return res.status(409).json({ error: 'The trip selected is not available.' });
}
let emails=[]
let numGuests=0
for(let i=0;i<rooms.length;i++){
  for(let j=0;j<rooms[i].guests.length;j++){
    numGuests++

  }}

  if (existingTrip.numberGuests+numGuests > existingTrip.maxGuests) {
    return res.status(409).json({ error: 'There are not enough spots available for your party. ' });
  }

    for(let i=0;i<rooms.length;i++){
      let guests=[]
     
  
      for(let j=0;j<rooms[i].guests.length;j++){
        let existingUser=null
        console.log(rooms[i].guests[j])
        let email= rooms[i].guests[j].email
        emails.push(email)
        existingUser = await User.findOne({email});
        if(!existingUser){
          let aux=rooms[i].guests[j]
          aux.password='PASSWORD_TO_CHANGE'
          let user = await User.create(aux);
          guests.push(user._id.toString())
          requestPasswordReset(email)
        }else{
          guests.push(existingUser._id.toString())
        }
      }

      rooms[i].guests=guests
     
    }
   
   ActiveTrip.findByIdAndUpdate(
    {_id: tripId}, 
    {
      numberGuests:existingTrip.numberGuests+numGuests
    }, 
    {
      returnOriginal: false, 
      useFindAndModify: false 
    }).then((data) => {
    
    })
    .catch(err => {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error"
      })
    });

   
    const newReservation = await Reservation.create({rooms:rooms,tripId:tripId});
    for(let i=0;i<emails.length;i++){
      sendEmail(emails[i],"You're all booked! Get ready for your adventure",{rooms:rooms,price:total,id:newReservation._id.toString().substring(0,8)},"reservationConfirmation");
  
    }
   
    res.status(200).json({
      newReservation,
    });


  }catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


