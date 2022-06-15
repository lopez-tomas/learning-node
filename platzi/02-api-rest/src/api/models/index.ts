import { Sequelize } from 'sequelize';
import { User, UserSchema } from './user.model';
import { Product, ProductSchema } from './product.model';
import { Category, CategorySchema } from './category.model';

const setupModels = (sequelize: Sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
}

export {
  setupModels
}
