import Users from '@models/user.model';

export class UserProvider {
  static get() {
    return Users.query();
  }

  static getById(id: string, withPosts = false) {
    return Users.query()
      .findById(id)
      .withGraphFetched(withPosts ? 'posts' : '');
  }

  static getByEmail(email: string) {
    return Users.query().where({ email }).first();
  }

  static create(user: Pick<Users, 'name' | 'email' | 'password'>) {
    return Users.query().insert(user);
  }

  static update(id: string, user: Partial<Users>) {
    return Users.query().findById(id).patch(user);
  }

  static deleteById(id: string) {
    return Users.query().findById(id).delete();
  }
}
