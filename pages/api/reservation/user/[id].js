import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getUserReservations } from "@/backend/controllers/reservationControler";

const handler = nc();

dbConnect();

handler.get(getUserReservations);
// handler.get(getHotels);

export default handler;