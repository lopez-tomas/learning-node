import { Product } from "./product.model";
import Joi from 'joi';

export type CreateProductDto = Omit<Product, 'id'>;

export type UpdateProductDto = Partial<CreateProductDto>;

const id = Joi.string().uuid();
const name = Joi.string().min(3);
const price = Joi.number().min(1.0).strict();
const description = Joi.string().min(10);
const image = Joi.string().dataUri();
const idCategory = Joi.string().uuid();
const isBlocked = Joi.boolean();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image,
  idCategory: idCategory.required(),
  isBlocked: isBlocked.required(),
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description,
  image: image,
  idCategory: idCategory,
  isBlocked: isBlocked,
});

export {
  createProductSchema,
  getProductSchema,
  updateProductSchema
}
