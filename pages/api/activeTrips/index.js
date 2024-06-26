import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newTrip,getActiveTrip } from "@/backend/controllers/activeTripController";

const handler = nc();

dbConnect();

handler.post(newTrip);


export default handler;