import { Category } from '../interfaces/categories/category.model';
import { CreateCategoryDto, UpdateCategoryDto } from '../interfaces/categories/category.dto';
import { sequelize } from '../libs/sequelize';

import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

class CategoriesService {
  categories: Category[];

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 10;

    for(let i=0; i<limit; i++) {
      let user: Category = {
        id: faker.datatype.uuid(),
        category: faker.commerce.department(),
      }

      this.categories.push(user);
    }
  }

  async create(data: CreateCategoryDto) {
    const newCategory: Category = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.categories.push(newCategory);
    return newCategory;
  }

  async get() {
    const response = await sequelize.models.Category.findAll();
    return response;
  }

  async getCategory(id: Category['id']) {
    const category = this.categories.find(user => user.id === id);

    if (!category)  throw boom.notFound('category not found');

    return category;
  }

  async update(id: Category['id'], changes: UpdateCategoryDto) {
    const index = this.categories.findIndex(category => category.id === id);

    if (index === -1) throw boom.notFound('category not found');

    const prevData = this.categories[index];
    this.categories[index] = {...prevData, ...changes};

    return this.categories[index];
  }

  async delete(id: Category['id']) {
    const index = this.categories.findIndex(category => category.id === id);

    if (index === -1) throw boom.notFound('category not found');

    this.categories.splice(index, 1);

    return { id };
  }
}

export default CategoriesService;
