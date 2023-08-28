import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getActivities,newActivity } from "@/backend/controllers/activityController";

const handler = nc();

dbConnect();

handler.post(newActivity);
handler.get(getActivities);


export default handler;