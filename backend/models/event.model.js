import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
});



export default mongoose.models.Event ||
  mongoose.model("Event", eventSchema);

