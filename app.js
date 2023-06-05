import express from 'express';
import {} from 'dotenv/config';
import dbConnection from './DB/Demo.js';
import router from './routes/Demo.js';
const app=express();
app.use(express.json());



app.use("/api",router)

const handleConnection =async()=>{
    try {
        await dbConnection(process.env.MONGO_URL);
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.log(error);                
    }
}


handleConnection();