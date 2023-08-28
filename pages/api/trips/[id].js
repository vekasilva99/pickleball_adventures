import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getTrip } from "@/backend/controllers/tripController";

const handler = nc();

dbConnect();


handler.get(getTrip);

export default handler;