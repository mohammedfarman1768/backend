// index.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import app from "./app.js"; // ✅ Import the Express app

// Load environment variables from .env file
dotenv.config({
  path: "./.env", // ✅ Correct path to .env in project root
});

// Connect to MongoDB and then start the server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });











//  import express from 'express';
//  const app = express();

//  (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on ("error" , (error) =>{
//             console.error(error);
//             throw error;
//         } );

//         app.listen (process.env.PORT, ()=>{
//             console.log (`Server is running on port ${process.env.PORT}`);
//         }
//     )
//      }
//      catch(error) {
//         console.error(error);
//         throw error;
//      }

//  }) ()
