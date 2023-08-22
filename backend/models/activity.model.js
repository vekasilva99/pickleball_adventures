import mongoose from "mongoose";

const Schema = mongoose.Schema;

const activitySchema = new Schema({
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



export default mongoose.models.Activity ||
  mongoose.model("Activity", activitySchema);

