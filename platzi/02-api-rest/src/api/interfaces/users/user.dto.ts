import { User } from "./user.model";
import Joi from 'joi';

export type CreateUserDto = Omit<User, 'id' | 'createdAt'>;

export type UpdateUserDto = Partial<CreateUserDto>;

const id = Joi.number().integer().positive();
const email = Joi.string().email();
const password = Joi.string().min(8);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  password: password,
});

export {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
}
