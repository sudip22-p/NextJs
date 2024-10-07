// lib/mongodb.js
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI; // MongoDB connection string
let isConnected; // Track the connection 

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const connectToDatabase = async () => {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    const { connection } = await mongoose.connect(uri);
    isConnected = connection.readyState === 1;
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw new Error('Failed to connect to database');
  }
};
export default connectToDatabase;
