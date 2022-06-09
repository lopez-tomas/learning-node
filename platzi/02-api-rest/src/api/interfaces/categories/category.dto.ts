import { Category } from './category.model';

export type CreateCategoryDto = Omit<Category, 'id'>;

export type UpdateCategoryDto = Partial<CreateCategoryDto>;
