import { Sequelize, Model, DataTypes } from 'sequelize';

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}

class Category extends Model {
  static associate() {
    // models
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false,
    }
  }
}

export {
  CATEGORY_TABLE,
  CategorySchema,
  Category
}
