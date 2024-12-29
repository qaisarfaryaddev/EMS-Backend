import mongoose from 'mongoose';
import express from 'express';
// import { LoginModel } from './models'; 
import dotenv from 'dotenv';
import {connectDB} from './db'
import app from './app';


dotenv.config();



// MongoDB connection string


//seeding applogin credentials

// const appCredentials = {
//   username: "ems_portal",
//   password: "password"
// }

// async function seedAppLogin() {
//   try {
//     // Check if login already exists
//     const existingLogin = await LoginModel.findOne({ username: appCredentials.username });
//     if (existingLogin) {
//       console.log('Login already exists.');
//     } else {
//       // Create appLogin if not exists
//       await LoginModel.create(appCredentials);
//       console.log('Admin seeded successfully.');
//     }
//   } catch (error) {
//     console.error('Error seeding admin:', error);
//   } 
// }

  connectDB();
  // seedAppLogin();

// Start the server
app.listen(process.env.PORT, () => {
  console.info(`Listening to port ${process.env.PORT}`);
});
