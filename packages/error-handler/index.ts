export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details?: any;
  constructor(
    message: string,
    statusCode: number,
    isOperational = true,
    details?: boolean,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;
  }
}

export class NotFoundException extends AppError {
  constructor(message = 'Not found') {
    super(message, 404);
  }
}

export class ValidationException extends AppError {
  constructor(message = 'Validation error', details?: any) {
    super(message, 400, true, details);
  }
}

export class UnauthorizedException extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

export class ForbiddenException extends AppError {
  constructor(message = 'Forbidden') {
    super(message, 403);
  }
}

export class DatabaseException extends AppError {
  constructor(message = 'Internal server error', details?: any) {
    super(message, 500, true, details);
  }
}

export class RateLimitException extends AppError {
  constructor(message = 'Too many request! Please try again later') {
    super(message, 429);
  }
}
