class CustomError extends Error {
  static error = 'ERROR';
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.message = message;
    this.statusCode = 500;
  }

  toJson() {
    return {
      error: CustomError.error,
      message: this.message,
    };
  }
}

export { CustomError };
