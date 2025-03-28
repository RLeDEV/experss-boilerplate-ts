import { Application, json, urlencoded } from 'express';
import { requestLogging } from '@middlewares/logging';
import { errorHandler } from '@middlewares/errorHandler';
import { connect } from '@database/connection';
import logger from '@common/logger';
import { appRoutes } from '@routes/index';

export function initApp(app: Application, environment: string) {
  const port = process.env.PORT || 3001;

  connect(environment);
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(requestLogging);
  app.use(errorHandler);

  app.use('/api/v1', appRoutes());

  app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
}
