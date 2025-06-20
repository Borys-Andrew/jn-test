import { Request, Response, NextFunction } from 'express';
import { ERROR_MESSAGES } from '../constants/errors';

interface HttpError extends Error {
  status?: number;
}

export const errorMiddleware = (
  err: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('Error:', err);

  const status = err.status ?? 500;
  const message = err.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR;

  res.status(status).json({ message });
};
