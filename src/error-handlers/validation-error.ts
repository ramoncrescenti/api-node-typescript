import { NextFunction, Request, Response } from 'express';
import { ExpressJoiError } from 'express-joi-validation';
import { ValidationError, TypesArray } from '../errors/validation-error';

const error = new ValidationError();

export function validationErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // type cast e type guard
  if (err && TypesArray.includes((err as ExpressJoiError).type)) {
    const joiErr = err as ExpressJoiError;
    return res
    .status(error.statusCode)
    .json({
      error: error.error,
      message: joiErr.error?.details.map(x => x.message),
    });
  }
  return next(err);
}
