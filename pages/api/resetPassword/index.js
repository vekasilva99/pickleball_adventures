import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { resetPassword } from "@/backend/controllers/userController";

const handler = nc();

dbConnect();

handler.post(resetPassword);
// handler.get(getHotels);

export default handler;