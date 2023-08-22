import Event from "../models/event.model";


export const newEvent = async (req, res, next) => {

  const event = await Event.create(req.body);
  res.status(200).json({
    event,
  });
};



export const getEvents = async (req, res, next) => {
  const events = await Event.find();
  res.status(200).json({
    events,
  });
};