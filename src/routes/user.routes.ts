import { Router } from 'express';
import {
  createUser,
  getUserByEmail,
  getUserById,
  getUserPosts,
  getUsers,
} from '@controllers/user.controller';
import { validateRequest } from '@middlewares/requestValidator';

const router = Router();

router.post(
  '/',
  validateRequest({ body: ['name', 'email', 'password'] }),
  createUser,
);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/:id/posts', getUserPosts);
router.get('/email/:email', getUserByEmail);
export default router;
