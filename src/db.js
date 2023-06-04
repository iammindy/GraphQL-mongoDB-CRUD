import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoDB = process.env.DB_URL;

const connectDB = async () => {
    try {
      await mongoose.connect(mongoDB);
      console.log('MongoDB connected');
    } catch (err) {
      console.error(err);
    }
  };

export default connectDB;