import logger from '@/common/logger';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { validationResult } from 'express-validator';

type ValidatorConfig = {
  body?: string[];
  query?: string[];
  params?: string[];
};

type FieldLocation = 'body' | 'query' | 'params';

function checkMissingFields(
  fields: string[] | undefined,
  reqObject: any,
  location: FieldLocation,
) {
  if (!fields) {
    return [];
  }

  const missingParamFields = fields.filter((field) => !(field in reqObject));
  return missingParamFields.map((field) => ({ field, location }));
}

export function validateRequest(config: ValidatorConfig): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({ errors: errors.array() });
    }

    const missingFields: Array<{
      field: string;
      location: FieldLocation;
    }> = [
      ...checkMissingFields(config.query, req.query, 'query'),
      ...checkMissingFields(config.body, req.body, 'body'),
      ...checkMissingFields(config.params, req.params, 'params'),
    ];

    if (missingFields.length > 0) {
      logger.error(
        `Missing required fields: ${missingFields.map(({ field }) => field).join(', ')}`,
      );
      res.status(400).send({
        errors: missingFields.map(({ field, location }) => ({
          msg: `Missing required ${location} parameter: ${field}`,
          param: field,
          location: location,
        })),
      });
    }

    if (!missingFields.length) {
      next();
    }
  };
}
