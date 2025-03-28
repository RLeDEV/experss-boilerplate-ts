import { Request, Response, NextFunction } from 'express';
import logger from '@common/logger';

export function requestLogging(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const { method, url, body } = req;
  logger.info(
    `Incoming request: ${method} ${url}, body: ${JSON.stringify(body)}`,
  );
  next();
}
