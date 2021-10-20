import { NextFunction, Request, Response } from 'express';
import { InternalServerError } from '../errors/internal-server-error';

const error = new InternalServerError();

function uncaughtErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  return res
    .status(error.statusCode)
    .json({ error: error.error, message: error.message.toString() });
}

export { uncaughtErrorHandler };
