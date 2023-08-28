import mongoose from "mongoose";

const Schema = mongoose.Schema;

const informationSchema=new Schema({
    category: {
        type: String,
        required:true
    },
    content:[{
        title1:{
            type: String,
            required: true
        },
        title2:{
            type: String,
            required: true
        },
        content:{
            type: String,
            
        },
        image:{
            type: String,
            required: true
        }
    }]
})
const hotelSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    information: [{
        type:informationSchema,
        required:true
    }],
    active: {
        type: Boolean,
        default: true,
    },
});



export default mongoose.models.Hotel ||
  mongoose.model("Hotel", hotelSchema);

