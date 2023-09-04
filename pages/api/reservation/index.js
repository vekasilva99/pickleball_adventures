import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newReservation } from "@/backend/controllers/reservationControler";

const handler = nc();

dbConnect();

handler.post(newReservation);
// handler.get(getHotels);

export default handler;