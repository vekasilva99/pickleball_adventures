import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required:[true, "Please enter password."]
    },
    content: {
        type: Date,
        required:[true, "Please enter date of birth."]
    },
    images: {
        type: [String],
        required:[true, "Please enter gender."],
    },
    active: {
        type: Boolean,
        required: true,
    },
});



export default mongoose.models.Event ||
  mongoose.model("Event", eventSchema);

