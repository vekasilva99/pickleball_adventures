import mongoose from "mongoose";

const Schema = mongoose.Schema;

const activeTripsSchema = new Schema({
    date: {
        type: Date,
        required:true,
    },
    trip: {
        type: Schema.Types.ObjectId, 
        ref: 'Trip', 
        required:true,
    },
    priceSingle: {
        type: Number,
        required:true,
    },
    priceDouble: {
        type: Number,
        required:true,
    },
    maxGuests: {
        type: Number,
        required:true,
    },
    numberGuests: {
        type: Number,
        default:0,
    },
    active: {
        type: Boolean,
        default: true,
    },
});



export default mongoose.models.ActiveTrips ||
  mongoose.model("ActiveTrips", activeTripsSchema);

