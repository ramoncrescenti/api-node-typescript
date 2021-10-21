import { CustomError } from './custom-error';

class InternalServerError extends CustomError {
  error = 'InternalServerError';
  constructor() {
    super('Internal Server Error');
    this.statusCode = 500;
  }
}

export { InternalServerError };
