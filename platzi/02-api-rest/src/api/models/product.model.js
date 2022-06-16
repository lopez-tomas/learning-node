const { Model, DataTypes } = require("sequelize");

const PRODUCT_TABLE = "products";

const ProductSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.DECIMAL(15,2),
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: 'No description given.',
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: '',
  },
  idCategory: {
    type: DataTypes.INTEGER,
    field: 'id_category',
    allowNull: false,
  },
  isBlocked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
}

class Product extends Model {
  static associate() {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    }
  }
}

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product
}
