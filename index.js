import express from 'express';
import { productRoutes } from './routers/products.js'
import dotenv from 'dotenv';
import { connectDB } from './db/connect.js';
dotenv.config();

const app=express();

const PORT=process.env.PORT || 3000;
await connectDB();

//middleware
app.use('/api/products',productRoutes);


app.get('/',(req,res)=>{
  res.send('<h1>Hello Santhosh</h1>');
})
const start = async()=>{
  app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
  })
}

start();
