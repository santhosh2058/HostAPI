import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file (if you're storing credentials securely)
dotenv.config();

// MongoDB connection URI (replace <db_password> with the actual password or use environment variables)
const uri = `mongodb+srv://Santhosh2058:Santhu@2058@cluster0.n6elme4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Define client options with Stable API version
const clientOptions = { 
  serverApi: { version: '1', strict: true, deprecationErrors: true } 
};

async function run() {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(uri, clientOptions);
    
    // Ping MongoDB to check the connection
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Ensure disconnection after the operation
    await mongoose.disconnect();
  }
}

// Run the function
run().catch(console.dir);
