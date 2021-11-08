import * as express from 'express';
import { userValidationSchema, emailValidationSchema } from './middlewares/validation';
import { signUp, validator } from './controllers/user';
import { sendMail } from './controllers/mail';
require('express-async-errors');

export const router = express.Router();

const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
  return Promise
      .resolve(fn(req, res, next))
      .catch(next);
};

router.get('/status', (req: express.Request, res: express.Response) => {
  res.status(200).json({ status: 'OK' });
});

router.post('/signup', validator.body(userValidationSchema), asyncHandler(signUp));

router.post('/sendmail', validator.body(emailValidationSchema), asyncHandler(sendMail));
