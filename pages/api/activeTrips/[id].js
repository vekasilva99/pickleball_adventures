import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getActiveTrip } from "@/backend/controllers/activeTripController";

const handler = nc();

dbConnect();


handler.get(getActiveTrip);

export default handler;