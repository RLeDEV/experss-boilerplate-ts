import { Model } from 'objection';
import Posts from './post.model';

class Users extends Model {
  id: string;
  name: string;
  email: string;
  password: string;
  posts: Posts[];
  createdAt: Date;
  updatedAt: Date;

  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'id';
  }

  static relationMappings = {
    posts: {
      relation: Model.HasManyRelation,
      modelClass: Posts,
      join: {
        from: 'users.id',
        to: 'posts.userId',
      },
    },
  };
}

export default Users;
