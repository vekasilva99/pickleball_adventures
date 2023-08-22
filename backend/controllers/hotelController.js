import Hotel from "../models/hotel.model";


export const newHotel = async (req, res, next) => {

  const hotel = await Hotel.create(req.body);
  res.status(200).json({
    hotel,
  });
};



export const getHotels = async (req, res, next) => {
  const hotels = await Hotel.find();
  res.status(200).json({
    hotels,
  });
};