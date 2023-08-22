import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: {
        type: String,
        required:[true, "Please enter Hotel Name."]
    },
    content: {
        type: String,

    },
    images: {
        type: [String],
  
    },
    active: {
        type: Boolean,
        required: true,
    },
});



export default mongoose.models.Hotel ||
  mongoose.model("Hotel", hotelSchema);

