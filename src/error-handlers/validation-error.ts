import { NextFunction, Request, Response } from 'express';
import { ExpressJoiError } from 'express-joi-validation';
import { ValidationError, TypesArray } from '../errors/validation-error';

const error = new ValidationError();

function validationErrorHandler(
  err: Error|ExpressJoiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // type cast e type guard
  if (err && TypesArray.includes((err as ExpressJoiError).type)) {
    return res
    .status(error.statusCode)
    .json({ error: error.error, message: error.message.toString() });
  } else return next(err);
  
}

export { validationErrorHandler };