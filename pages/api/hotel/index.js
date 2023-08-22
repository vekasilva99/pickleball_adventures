import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newHotel, getHotels } from "@/backend/controllers/hotelController";

const handler = nc();

dbConnect();

handler.post(newHotel);
handler.get(getHotels);

export default handler;