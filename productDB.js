import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { user } from "./model/products.js";
import { products } from "./products.js";

const start = async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    await user.create(products);
    console.log("success");
  }
  catch(err){
    console.log(err);
  }
}

start();