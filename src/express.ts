import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { router } from './router';
import { uncaughtErrorHandler } from './error-handlers/uncaught-error';
import { validationErrorHandler } from './error-handlers/validation-error';
import { mailErrorHandler } from './error-handlers/mail-error';

const app = express();

const dbUrl = process.env.DB_URL ?? '';
// pensar em throw para variavel env invalida

export async function bootstrap() {
  // await mongoose.connect(dbUrl);

  app.use(bodyParser.json());

  app.use(router);

  app.use(validationErrorHandler);
  app.use(mailErrorHandler);
  app.use(uncaughtErrorHandler);

  return app;
}
