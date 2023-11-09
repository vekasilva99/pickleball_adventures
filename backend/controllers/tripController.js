import Trip from "../models/trip.model";
import Hotel from "../models/hotel.model";
import Restaurant from "../models/restaurant.model";
import Event from "../models/event.model";
import Activity from "../models/activity.model";
import ActiveTrip from "../models/activeTrips.model";


export const newTrip = async (req, res, next) => {
  const { hotel, restaurants,events,activities } = req.body;
try{
  const existingHotel = await Hotel.findOne({ _id: hotel });
  if (!existingHotel || existingHotel==null ) {
    return res.status(400).json({ error: 'Hotel does not exist in the database.' });
  }
  for(let i=0;i<restaurants.length;i++){
    let existingRestaurant = await Restaurant.findOne({ _id: restaurants[i] });
    if (!existingRestaurant || existingRestaurant==null ) {
      return res.status(400).json({ error: 'One or more restaurants do not exist in the database.' });
    }
  }

    for(let i=0;i<events.length;i++){
      let existingEvent = await Event.findOne({ _id: events[i] });
      if (!existingEvent || existingEvent==null ) {
        return res.status(400).json({ error: 'One or more events do not exist in the database.' });
      }
  }

  for(let i=0;i<activities.length;i++){
    let existingActivity = await Activity.findOne({ _id: activities[i] });
    if (!existingActivity || existingActivity==null ) {
      return res.status(400).json({ error: 'One or more activities do not exist in the database.' });
    }

  }

  const trip = await Trip.create(req.body);
  res.status(200).json({
    trip,
  });

}catch (error) {
  console.error(error);
  return res.status(500).json({ error: 'Internal server error' });
}
};



export const getTrips = async (req, res, next) => {
  let trips = await Trip.find();
const currentDate=new Date();
  for(let i=0;i<trips.length;i++){
    let activetrips = await ActiveTrip.find({trip:trips[i]._id,date:{$gt:currentDate}});
    

trips[i]={_id:trips[i]._id,name:trips[i].name,city:trips[i].city,country:trips[i].country,hotel:trips[i].hotel,restaurants:trips[i].restaurants,activities:trips[i].activities,events:trips[i].events,nights:trips[i].nights,images:trips[i].images,main_image:trips[i].main_image,active:trips[i].active,dates:activetrips}
  


  }


  res.status(200).json({
    trips,
  });
};


export const getTrip = async (req, res, next) => {
  try{
    const trip = await Trip.findById(req.query.id);
    if (!trip) {
      res.status(404).json({
        error: "Trip not found.",
      });
    }
console.log(trip)
    trip.hotel= await Hotel.findById(trip.hotel);
 
    let auxRestaurants=[]
    for(let i=0;i<trip.restaurants.length;i++){
      let existingRestaurant = await Restaurant.findOne({ _id: trip.restaurants[i] });
     auxRestaurants.push(existingRestaurant)
    }
  
    trip.restaurants=auxRestaurants
    
    let auxEvents=[]
      for(let i=0;i<trip.events.length;i++){
        let existingEvent = await Event.findOne({ _id: trip.events[i] });
        auxEvents.push(existingEvent)
    }

    trip.events=auxEvents
  
    let auxActivities=[]
    for(let i=0;i<trip.activities.length;i++){
      let existingActivity = await Activity.findOne({ _id: trip.activities[i] });
      auxActivities.push(existingActivity)
  
    }
    trip.activities=auxActivities
    const currentDate=new Date();
    let activetrips = await ActiveTrip.find({trip:trip._id,date:{$gt:currentDate}});
    
let dates=[]
     dates=activetrips
      
    
 
    res.status(200).json({trip:trip,dates:dates});
  }catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};