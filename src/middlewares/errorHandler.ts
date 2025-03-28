import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err) {
    if (!res.statusCode || res.statusCode === 200) {
      res.status(400);
    }
    res.send({ error: err.message });
  } else {
    next();
  }
}
