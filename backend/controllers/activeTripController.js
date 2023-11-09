import  Trip from "../models/trip.model";
import  ActiveTrip from "../models/activeTrips.model";


export const newTrip = async (req, res, next) => {
  const { trip } = req.body;
  try{
    const existingTrip = await Trip.findOne({ _id: trip });
    if (!existingTrip || existingTrip==null ) {
      return res.status(400).json({ error: 'Trip does not exist in the database.' });
    }
  
   
  
    const activeTrip = await ActiveTrip.create(req.body);
    res.status(200).json({
      activeTrip,
    });
  
  }catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};



export const getTrips = async (req, res, next) => {
  const trips = await ActiveTrip.find({trip:req.query.id});
  const existingTrip = await Trip.findOne({ _id: req.query.id });
  for(let i=0;i<trips.length;i++){

  }
  res.status(200).json({
    trips,
  });
};


export const getActiveTrip = async (req, res, next) => {
try{
  console.log('entre')
  const activeTrip = await ActiveTrip.findOne({ _id: { $eq: req.query.id } });

  const existingTrip = await Trip.findOne({ _id: activeTrip.trip });
console.log('mkjnhbgvfcgvhbjnk',activeTrip)
console.log('mkjnhbgvfcgvhbjnk',existingTrip)
  if (!existingTrip || existingTrip==null || !activeTrip ||  activeTrip==null) {
    return res.status(400).json({ error: 'Trip does not exist in the database.' });
  }
  res.status(200).json({
    activeTrip,
    existingTrip,
  });
}catch (error) {
  console.error(error);
  return res.status(500).json({ error: 'Internal server error' });
}
};