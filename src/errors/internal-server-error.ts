import { CustomError } from './custom-error';

class InternalServerError extends CustomError {
  error: string = 'InternalServerError';
  constructor() {
    super('Internal Server Error');
    this.statusCode = 500;
  }
}

export { InternalServerError };
