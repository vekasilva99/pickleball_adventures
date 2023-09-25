import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
const roomsSchema=new Schema({
  room_number: {
      type: Number,
      required:true
  },
  guests:[{  
    type: Schema.Types.ObjectId,
    ref: "User"}]
})
const reservationSchema = new mongoose.Schema({
  tripId: {
    type: Schema.Types.ObjectId,
    ref: "ActiveTrip",
  },
  rooms:[{
    type:roomsSchema,
    required:true
}],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  total: {
    type: Number,
    required:true
  },
  paymentId: {
    type: String,
    required:true
  },
  cancelled: {
    type: Boolean,
    default: false,
  },  
});

export default mongoose.models.Reservation ||
  mongoose.model("Reservation", reservationSchema);

