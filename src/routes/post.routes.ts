import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from '@/controllers/post.controller';
import { validateRequest } from '@/middlewares/requestValidator';

const router = Router();

router.get('/', getPosts);
router.post(
  '/',
  validateRequest({ body: ['userId', 'title', 'content'] }),
  createPost,
);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
