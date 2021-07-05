import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import connectDB from './utils/db';
import initMiddleware from './utils/middleware';
import { initGraphQL } from './graphql';

// Init .env file
dotenv.config();

const PORT: String | Number = process.env.PORT || 5000;

async function startExpress() {
  try {
    const app: Application = express();
    // Connect to mongo
    await connectDB(app);

    // Initialize middleware
    await initMiddleware(app);

    // Initialize Routes
    // FIXME: complete rest of routes...?
    app.get('/', (req: Request, res: Response) => {
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
