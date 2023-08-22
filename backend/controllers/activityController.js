import  Activity from "../models/activity.model";


export const newActivity = async (req, res, next) => {

  const activity = await Activity.create(req.body);
  res.status(200).json({
    activity,
  });
};



export const getActivities = async (req, res, next) => {
  const activities = await Activity.find();
  res.status(200).json({
    activities,
  });
};