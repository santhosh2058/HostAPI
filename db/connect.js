import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.MONGO_URI;

export const connectDB = async()=>{
  await mongoose.connect(uri);
}

