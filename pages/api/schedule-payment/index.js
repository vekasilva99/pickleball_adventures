import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { checkout,schedulePayment } from "@/backend/controllers/paymentController";

const handler = nc();

dbConnect();

handler.post(schedulePayment);


export default handler;