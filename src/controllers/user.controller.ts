import { Request, Response } from 'express';
import status from 'http-status';
import { UserProvider } from '@providers/user.provider';
import { PostProvider } from '@/providers/post.provider';

export async function createUser(req: Request, res: Response) {
  const user = req.body;
  const createdUser = await UserProvider.create(user);
  res.status(status.CREATED).send(createdUser);
}

export async function getUsers(_req: Request, res: Response) {
  const users = await UserProvider.get();
  res.status(status.OK).send(users);
}

export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  const user = await UserProvider.getById(id);
  res.status(status.OK).send(user);
}

export async function getUserByEmail(req: Request, res: Response) {
  const { email } = req.params;
  const user = await UserProvider.getByEmail(email);
  res.status(status.OK).send(user);
}

export async function getUserPosts(req: Request, res: Response) {
  const { id } = req.params;
  const posts = await UserProvider.getById(id, true);
  res.status(status.OK).send(posts);
}
