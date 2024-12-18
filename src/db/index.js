import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';


const connectDB = async ()=>{
    try {
        const connectionINstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Mongodb connected || DB HOST:${connectionINstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED", error);
        process.exit(1);
    }
}

export default connectDB;