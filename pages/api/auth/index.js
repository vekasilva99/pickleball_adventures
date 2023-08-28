import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newUser,getUsers,login } from "@/backend/controllers/userController";

const handler = nc();

dbConnect();

handler.post(login);


export default handler;