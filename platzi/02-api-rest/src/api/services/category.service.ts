import { faker } from '@faker-js/faker';
import { Category } from '../interfaces/categories/category.model';
import { CreateCategoryDto, UpdateCategoryDto } from '../interfaces/categories/category.dto';

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.categories);
      });
    });
  }

  async getCategory(id: Category['id']) {
    const category = this.categories.find(user => user.id === id);

    if (category) {
      return category;
    } else {
      throw new Error('category not found');
    }
  }

  async update(id: Category['id'], changes: UpdateCategoryDto) {
    const index = this.categories.findIndex(category => category.id === id);

    if (index === -1) throw new Error('category not found');

    const prevData = this.categories[index];
    this.categories[index] = {...prevData, ...changes};

    return this.categories[index];
  }

  async delete(id: Category['id']) {
    const index = this.categories.findIndex(category => category.id === id);

    if (index === -1) throw new Error('category not found');

    this.categories.splice(index, 1);

    return { id };
  }
}

export default CategoriesService;
