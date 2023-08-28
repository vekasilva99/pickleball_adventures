import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getEvents,newEvent } from "@/backend/controllers/eventController";

const handler = nc();

dbConnect();

handler.post(newEvent);
handler.get(getEvents);


export default handler;