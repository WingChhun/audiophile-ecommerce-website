import dotenv from 'dotenv';
import express from 'express';
import connectDB from './utils/db';
import initMiddleware from './utils/middleware';
import { initGraphQL } from './graphql';

dotenv.config(); // Init .env file

const PORT = process.env.PORT || 5000;

async function startExpress() {
  try {
    const app = express();

    // Connect to mongo
    await connectDB(app);

    // Initialize middleware
    await initMiddleware(app);

    // Initialize Routes
    app.get('/', (req, res) => {
      res.send('hello');
    });

    // Init graphQL endpoint
    await initGraphQL(app);

    // Start server and listen on port
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (err) {
    console.log('err:', err);
    console.error('Server ending, uncaught exception.');
    process.exit(1);
  }
}

startExpress();
