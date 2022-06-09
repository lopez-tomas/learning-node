import { User } from "./user.model";

export type CreateUser = Omit<User, 'id'>;

export type UpdateUser = Partial<CreateUser>;
