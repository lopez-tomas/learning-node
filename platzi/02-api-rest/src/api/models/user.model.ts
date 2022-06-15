import { Sequelize, Model, DataTypes, NOW } from 'sequelize';

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: false,
    defaultValue: NOW,
  }
}

class User extends Model {
  static associate() {
    // models
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    }
  }
}

export {
  USER_TABLE,
  UserSchema,
  User,
}
