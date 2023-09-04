import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const tokenSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
  
});

export default mongoose.models.Token ||
  mongoose.model("Token", tokenSchema);

