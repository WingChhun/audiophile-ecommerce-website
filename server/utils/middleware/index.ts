import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

async function initMiddleware(app: any) {
  return new Promise((resolve, reject) => {
    try {
      // Allow JSON.
      app.use(express.json());
      // Baseline security for our express server(s). Adds 11 security modules that prevent a variety of attacks against an Express applications
      app.use(
        helmet({
          contentSecurityPolicy: false,
        })
      );
      // Logging for HTTP requests...
      app.use(morgan('tiny'));
      // Allow requests from all origins, unless specified otherwise.
      app.use(cors());
      app.use(express.json());
      app.use(express.urlencoded({ extended: false }));

      chalk.blue('Added Middleware.');
      resolve(app);
    } catch (err) {
      chalk.red('Error at adding middleware');
      reject(err);
    }
  });
}

export default initMiddleware;
