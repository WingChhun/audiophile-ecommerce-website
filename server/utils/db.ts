import { Application } from 'express';
import mongoose from 'mongoose';

/**
 * connect to MongoDB
 * @param app
 */
function connectDB(app: Application) {
  const MONGO: string = process.env.MONGO || '';

  return new Promise(async (resolve, reject) => {
    try {
      console.log('Connecting to MongoDB...');

      await mongoose.connect(MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log('Connected to MongoDB...');
      resolve(app);
    } catch (err) {
      reject(err);
    }
  });
}

export default connectDB;
