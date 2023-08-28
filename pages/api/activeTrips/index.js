import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newTrip } from "@/backend/controllers/activeTripController";

const handler = nc();

dbConnect();

handler.post(newTrip);
// handler.get(getHotels);

export default handler;