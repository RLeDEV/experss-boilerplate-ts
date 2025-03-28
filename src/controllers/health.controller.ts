import { Request, Response } from 'express';
import status from 'http-status';

export function getHealth(_req: Request, res: Response) {
  res.status(status.OK).send({ status: 'OK' });
}
