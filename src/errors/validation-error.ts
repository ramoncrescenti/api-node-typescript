import { CustomError } from './custom-error';

const TypesArray = ['body', 'query', 'headers', 'fields', 'params'];

class ValidationError extends CustomError {
  error = 'Validation Error';
  constructor() {
    super('Validation Error');
    this.statusCode = 401;
  }
}

export { ValidationError, TypesArray };