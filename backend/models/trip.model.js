import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tripSchema = new Schema({
    name: {
        type: String,
        required:[true, "Please enter password."]
    },
    city: {
        type: String,
        required:[true, "Please enter date of birth."]
    },
    country: {
        type: String,
        required:[true, "Please enter gender."],
    },
    hotel: {
        type: String,
        required:[true, "Please enter gender."],
    },
    restaurants:  [{ type : Schema.Types.ObjectId, ref: 'Restaurant' }],
    activities: [{ type : Schema.Types.ObjectId, ref: 'Activity' }],
    events:[{ type : Schema.Types.ObjectId, ref: 'Event' }],
    nights: {
        type: Number,
        required:[true, "Please enter gender."],
    },
    active: {
        type: Boolean,
        required: true,
    },
});



export default mongoose.models.Trip ||
  mongoose.model("Trip", tripSchema);

