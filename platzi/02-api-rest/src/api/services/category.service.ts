import { faker } from '@faker-js/faker';
import { Category } from '../interfaces/categories/category.model';

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

  get() {
    return this.categories;
  }

  getCategory(id: Category['id']) {
    return this.categories.find(user => user.id === id);
  }
}

export default CategoriesService;
