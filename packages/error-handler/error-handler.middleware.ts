import { AppError } from './index';
import type { Request, Response } from 'express';
export const errorMiddleware = (err: Error, req: Request, res: Response) => {
  if (err instanceof AppError) {
    console.log(`[ Exception ] ${req.method} ${req.url} - ${err.message}`);
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      ...(err.details && { details: err.details }),
    });
  }

  console.log(`[ Exception ] ${req.method} ${req.url} - ${err.message}`);
  return res.status(500).json({
    status: 'error',
    message: 'An unexpected error has occurred! Please try again later.',
  });
};
