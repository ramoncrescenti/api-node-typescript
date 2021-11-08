import { CustomError } from './custom-error';

export class MailError extends CustomError {
  error = 'Mail Error';
  constructor(newMessage?: any) {
    super(newMessage);
    this.statusCode = 404;
  }
}
