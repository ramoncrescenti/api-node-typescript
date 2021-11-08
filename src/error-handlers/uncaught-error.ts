import { NextFunction, Request, Response } from 'express';
import { InternalServerError } from '../errors/internal-server-error';

const error = new InternalServerError();

export function uncaughtErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
    console.log(err);
    return res
    .status(error.statusCode)
    .json({
      error: error.error,
      message: error.message.toString()
    });
}
