import { Request, Response } from 'express';
import status from 'http-status';
import { PostProvider } from '@/providers/post.provider';

export async function getPosts(req: Request, res: Response) {
  const { userId } = req.query;

  if (!userId) {
    const posts = await PostProvider.get();
    res.status(status.OK).send(posts);
  } else {
    const posts = await PostProvider.getByUserId(userId.toString());
    res.status(status.OK).send(posts);
  }
}

export async function createPost(req: Request, res: Response) {
  const { userId, title, content } = req.body;
  const post = await PostProvider.create({ userId, title, content });
  res.status(status.CREATED).send(post);
}

export async function updatePost(req: Request, res: Response) {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await PostProvider.update(id, { title, content });
  res.status(status.OK).send(post);
}

export async function deletePost(req: Request, res: Response) {
  const { id } = req.params;
  await PostProvider.deleteById(id);
  res.status(status.NO_CONTENT).send();
}
