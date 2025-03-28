import { Router } from 'express';
import health from '@/routes/health.routes';
import user from '@/routes/user.routes';
import post from '@/routes/post.routes';

export function appRoutes(): Router {
  const router = Router();

  router.use('/health', health);
  router.use('/users', user);
  router.use('/posts', post);

  return router;
}
