import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newUser } from "@/backend/controllers/userController";

const handler = nc();

dbConnect();

handler.post(newUser);

export default handler;