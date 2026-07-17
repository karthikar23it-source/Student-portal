import type { NextFunction, Request, Response } from 'express';
import { logger } from '../config/logger.js';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error(err);

  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};
