import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newUser,getUsers } from "@/backend/controllers/userController";

const handler = nc();

dbConnect();

handler.post(newUser);
handler.get(getUsers);

export default handler;