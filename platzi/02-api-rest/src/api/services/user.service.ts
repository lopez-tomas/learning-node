import { faker } from '@faker-js/faker';
import { User } from '../interfaces/users/user.model';
import { CreateUserDto, UpdateUserDto } from '../interfaces/users/user.dto';

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

  async create(data: CreateUserDto) {
    const newUser: User = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.users.push(newUser);
    return newUser;
  }

  async get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 5000);
    })
  }

  async getUser(id: User['id']) {
    const product = this.users.find(user => user.id === id);
    if (product) {
      return product;
    } else {
      throw new Error('user not found');
    }
  }

  async update(id: User['id'], changes: UpdateUserDto) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) throw new Error('user not found');

    const prevData = this.users[index];
    this.users[index] = {...prevData, ...changes};

    return this.users[index];
  }

  async delete(id: User['id']) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) throw new Error('user not found');

    this.users.splice(index, 1);

    return { id };
  }
}

export default UsersService;
