import mongoose from "mongoose";

const Schema = mongoose.Schema;

const activeTripsSchema = new Schema({
    date: {
        type: Date,
        required:[true, "Please enter password."]
    },
    trip: {
        type: Schema.Types.ObjectId, 
        ref: 'Trip', 
        required:[true, "Please enter date of birth."]
    },
    priceSingle: {
        type: Number,
        required:[true, "Please enter gender."],
    },
    priceDouble: {
        type: Number,
        required:[true, "Please enter gender."],
    },
    maxGuests: {
        type: Number,
        required:[true, "Please enter gender."],
    },
    numberGuests: {
        type: Number,
        required:[true, "Please enter gender."],
    },
    active: {
        type: Boolean,
        required: true,
    },
});



export default mongoose.models.ActiveTrips ||
  mongoose.model("ActiveTrips", activeTripsSchema);

