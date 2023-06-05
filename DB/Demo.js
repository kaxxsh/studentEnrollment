import mongoose from 'mongoose';


const dbConnection =async(Url)=>{
    await mongoose.connect(Url)
}


export default dbConnection;