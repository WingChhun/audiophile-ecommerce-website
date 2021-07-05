import chalk from 'chalk';
import mongoose from 'mongoose';

/**
 * connect to MongoDB
 * @param app
 */
function connectDB(app: any) {
  const MONGO: string = process.env.MONGO || '';

  return new Promise(async (resolve, reject) => {
    try {
      chalk.blue('Connecting to MongoDB...');
      await mongoose.connect(MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      chalk.blue('Connected to MongoDB...');
      resolve(app);
    } catch (err) {
      reject(err);
    }
  });
}

export default connectDB;
