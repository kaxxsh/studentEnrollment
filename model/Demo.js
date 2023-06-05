import mongoose from "mongoose";

const dbSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the name"]
    }
})

const Demo = mongoose.model("Demo",dbSchema);

export default Demo;