import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getRestaurants, newRestaurant } from "@/backend/controllers/restaurantController";

const handler = nc();

dbConnect();

handler.post(newRestaurant);
handler.get(getRestaurants);


export default handler;