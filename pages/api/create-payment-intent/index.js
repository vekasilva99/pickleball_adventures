import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { checkout } from "@/backend/controllers/paymentController";

const handler = nc();

dbConnect();

handler.post(checkout);


export default handler;