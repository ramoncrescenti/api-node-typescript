import { CustomError } from './custom-error';

export class InternalServerError extends CustomError {
  error = 'InternalServerError';
  constructor() {
    super('Internal Server Error');
    this.statusCode = 500;
  }
}
