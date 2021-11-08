import { CustomError } from './custom-error';

export const TypesArray = ['body', 'query', 'headers', 'fields', 'params'];

export class ValidationError extends CustomError {
  error = 'Validation Error';
  constructor() {
    super('Validation Error');
    this.statusCode = 401;
  }
}
