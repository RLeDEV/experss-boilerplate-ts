import { Model } from 'objection';
import Users from './user.model';

class Posts extends Model {
  id: string;
  title: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;

  static get tableName() {
    return 'posts';
  }

  static get idColumn() {
    return 'id';
  }

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: Users,
      join: {
        from: 'posts.userId',
        to: 'users.id',
      },
    },
  };
}

export default Posts;
