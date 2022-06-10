import { Category } from './category.model';
import Joi from 'joi';

export type CreateCategoryDto = Omit<Category, 'id'>;

export type UpdateCategoryDto = Partial<CreateCategoryDto>;

const id = Joi.string().uuid();
const category = Joi.string();

const createCategorySchema = Joi.object({
  category: category.required(),
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

const updateCategorySchema = Joi.object({
  category: category.required(),
});

export {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
}
