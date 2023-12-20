import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'
const connectDB = async()=>{
    try {
     const connectionDB =  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
     console.log(`MongoDB connected !! DB HOST: ${connectionDB.connection.host}`);
    } catch (error) {
        console.log(`${process.env.MONGO_URI}`)
        console.error("MONGODB Connect Error ",error);
        process.exit(1);
    }
}

export default connectDB;