import Posts from '@models/post.model';

export class PostProvider {
  static get() {
    return Posts.query();
  }

  static getById(id: string) {
    return Posts.query().findById(id);
  }

  static getByUserId(userId: string) {
    return Posts.query().where({ userId });
  }

  static create(post: Pick<Posts, 'title' | 'content' | 'userId'>) {
    return Posts.query().insert(post);
  }

  static update(id: string, post: Partial<Posts>) {
    return Posts.query().findById(id).patch(post);
  }

  static deleteById(id: string) {
    return Posts.query().findById(id).delete();
  }
}
