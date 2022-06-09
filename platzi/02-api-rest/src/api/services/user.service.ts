import { faker } from '@faker-js/faker';
import { User } from '../interfaces/users/user.model';

class UsersService {
  users: User[];

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;

    for(let i=0; i<limit; i++) {
      let user: User = {
        id: faker.datatype.uuid(),
        name: faker.name.firstName() + faker.name.lastName(),
        email: `${faker.name.firstName()}@${faker.name.lastName()}.com`
      }

      this.users.push(user);
    }
  }

  get() {
    return this.users;
  }

  getUser(id: User['id']) {
    return this.users.find(user => user.id === id);
  }
}

export default UsersService;
