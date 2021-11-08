import { NextFunction, Request, Response } from 'express';
import { MailError } from '../errors/mail-error';

const error = new MailError();

export function mailErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // type cast e type guard
  if (err.error === 'Mail Error') {
    return res
    .status(error.statusCode)
    .json({
      error: error.error,
      message: err.message,
    });
  }
  return next(err);
}
