import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { router } from './router';
import { uncaughtErrorHandler } from './error-handlers/uncaught-error';
import { validationErrorHandler } from './error-handlers/validation-error';
// import * as mailjet from 'node-mailjet';

const app = express();
const dbUrl = process.env.DB_URL ?? '';
// pensar em throw para variavel env invalida

async function bootstrap() {
  await mongoose.connect(dbUrl);

  app.use(bodyParser.json());

  app.use(router);

  app.use(validationErrorHandler);
  app.use(uncaughtErrorHandler);

  /* const admail = mailjet.connect(
    'f3b8c15cca4cd2e1227bf89bc13fff8a',
    '65beaaa30b78c1ed03f498a81d7167bd'
  );
  const request = admail.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'ramoncrescenti5@gmail.com',
          Name: 'Tom',
        },
        To: [
          {
            Email: 'ramones.jogos@gmail.com',
            Name: 'Tom',
          },
        ],
        Subject: 'The First Test',
        TextPart: 'My first Mailjet email',
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    }); */

  return app;
}

export { bootstrap };
