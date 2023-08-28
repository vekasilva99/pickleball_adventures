import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tripSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    hotel: { type : Schema.Types.ObjectId, ref: 'Hotel' },
    restaurants:  [{ type : Schema.Types.ObjectId, ref: 'Restaurant' }],
    activities: [{ type : Schema.Types.ObjectId, ref: 'Activity' }],
    events:[{ type : Schema.Types.ObjectId, ref: 'Event' }],
    nights: {
        type: Number,
        required: true
    },
    images: {
        type:[String],
        required:true,

    },
    main_image:{
type:String,
required:true
    },
    active: {
        type: Boolean,
        default: true,
    },
});



export default mongoose.models.Trip ||
  mongoose.model("Trip", tripSchema);

