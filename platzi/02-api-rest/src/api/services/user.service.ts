import { User } from '../interfaces/users/user.model';
import { CreateUserDto, UpdateUserDto } from '../interfaces/users/user.dto';
import { sequelize } from '../libs/sequelize';

import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

class UsersService {
  users: User[];

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    let firstName: User['name'];
    let lastName: User['name'];

    for(let i=0; i<limit; i++) {
      firstName = faker.name.firstName();
      lastName = faker.name.lastName();

      let user: User = {
        id: faker.datatype.uuid(),
        name: `${firstName} ${lastName}`,
        email: `${firstName}@${lastName}.com`
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
    const response = await sequelize.models.User.findAll();
    return response;
  }

  async getUser(id: User['id']) {
    const product = this.users.find(user => user.id === id);

    if (!product) throw boom.notFound('user not found');

    return product;
  }

  async update(id: User['id'], changes: UpdateUserDto) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) throw boom.notFound('user not found');

    const prevData = this.users[index];
    this.users[index] = {...prevData, ...changes};

    return this.users[index];
  }

  async delete(id: User['id']) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) throw boom.notFound('user not found');

    this.users.splice(index, 1);

    return { id };
  }
}

export default UsersService;
