import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getTrips, newTrip } from "@/backend/controllers/tripController";

const handler = nc();

dbConnect();

handler.post(newTrip);
handler.get(getTrips);

export default handler;