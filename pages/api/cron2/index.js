
import Reservation from '@/backend/models/reservation.model'
import User from '@/backend/models/user.model'
import ActiveTrips from '@/backend/models/activeTrips.model'
import dbConnect from "@/backend/config/dbConnect";
import moment from 'moment';
import Stripe from "stripe";


const calculateGuests=(rooms)=>{

  let result=0;

  for(let i=0;i<rooms.length;i++){
    result+=rooms[i].guests.length
  }

  return result

}
dbConnect();

export default async function handler(req, res) {
  try {
 
    const today = moment().startOf('day');
    const reservations = await Reservation.find()
      .populate({ path: 'tripId', model: 'ActiveTrips' })
      .then(reservations => {
        return reservations.filter((reservation) => {
          const reservationDate = moment(reservation.tripId.date).startOf('day');
          return reservationDate.isSame(today, 'day');
        });
      })
      .catch(error => {
        res.status(500).json({ error: 'Internal server error' });
      });
let users=[]
    for (let i = 0; i < reservations.length; i++) {
      let numberGuests=calculateGuests(reservations[i].rooms)
    let result=0;

      for(let j=0;j<reservations[i].rooms.length;j++){
        for(let k=0;k<reservations[i].rooms[j].guests.length;k++){
         
          const user = await User.findByIdAndUpdate(
            reservations[i].rooms[j].guests[k],
            { $inc: { points: 550 } },
            { new: true }
          );
     
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }

          users.push(user)
        
        }
      }
    }
    res.status(200).json({
     users
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}






