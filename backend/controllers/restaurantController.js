import  Restaurant from "../models/restaurant.model";


export const newRestaurant = async (req, res, next) => {

  const restaurant = await Restaurant.create(req.body);
  res.status(200).json({
    restaurant,
  });
};



export const getRestaurants = async (req, res, next) => {
  const restaurants = await Restaurant.find();
  res.status(200).json({
    restaurants,
  });
};