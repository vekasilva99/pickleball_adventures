import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { prueba } from "@/backend/controllers/userController";

const handler = nc();

dbConnect();


handler.post(prueba);


export default handler;