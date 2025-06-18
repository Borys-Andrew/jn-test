import { Request, Response, NextFunction } from 'express';
import { ERROR_MESSAGES } from '../constants/errors';

export const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
  res.status(status).json({ message });
};
