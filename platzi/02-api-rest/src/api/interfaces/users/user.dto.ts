import { User } from "./user.model";
import Joi from 'joi';

export type CreateUserDto = Omit<User, 'id'>;

export type UpdateUserDto = Partial<CreateUserDto>;

const id = Joi.string().uuid();
const name = Joi.string().min(3);
const email = Joi.string().email();

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
});

export {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
}
