import Reservation from '@/backend/models/reservation.model'
import ActiveTrips from '@/backend/models/activeTrips.model'
import dbConnect from "@/backend/config/dbConnect";
import moment from 'moment';
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculateGuests=(rooms)=>{

  let result=0;

  for(let i=0;i<rooms.length;i++){
    result+=rooms[i].guests.length
  }

  return result

}
dbConnect();
export default async function handler(req, res) {
  try{
  const today=moment().startOf('day').add(42,'days')
  // const targetDate=moment(today).add(42,'days').endOf('day')
  const reservations = await Reservation.find().populate({path:'tripId',model:'ActiveTrips'}).then(reservations => {
   return reservations.filter((reservation)=>reservation.tripId.date>=today.toDate())
  })
  .catch(error => {
    res.status(500).json({ error: 'Internal server error' });
  });

  for(let i=0;i<reservations.length;i++){

    console.log('hola',calculateGuests(reservations[i].rooms))
    if(!reservations[i].paymentId && !reservations[i].cancelled){
      const paymentMethods = await stripe.paymentMethods.list({
        customer: reservations[i].customer,
        type: "card",
      });
    
      const paymentIntent2 = await stripe.paymentIntents.create({
        amount: (reservations[i].total-(250*calculateGuests(reservations[i].rooms))) * 100,
        currency: "USD",
        customer: reservations[i].customer,
        payment_method: paymentMethods.data[0].id,
        confirm:true,
        setup_future_usage: "off_session",
        automatic_payment_methods: {
          enabled: true,
          allow_redirects:'never'
        },
      });
if(paymentIntent2.id){
 const prueba= await Reservation.findByIdAndUpdate(reservations[i]._id,{paymentId:paymentIntent2.id}).then((doc)=>{
  console.log('kjnhbgvfcgvhbjnkml',doc)
 })

}
     
    }
  
  }




  res.status(200).json({
    reservations
  });
}catch(error){

  res.status(500).json({ error: 'Internal Server Error' });
}
 
  }