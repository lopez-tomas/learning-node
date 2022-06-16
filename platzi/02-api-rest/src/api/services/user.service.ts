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
    let firstName: User['email'];
    let lastName: User['email'];

    for(let i=0; i<limit; i++) {
      firstName = faker.name.firstName();
      lastName = faker.name.lastName();

      let user: User = {
        id: faker.datatype.number(),
        email: `${firstName}@${lastName}.com`,
        password: `${firstName}${lastName}123`,
        createdAt: new Date(),
      }

      this.users.push(user);
    }
  }

  async create(data: CreateUserDto) {
    const newUser = await sequelize.models.User.create(data);
    return newUser;
  }

  async get() {
    const response = await sequelize.models.User.findAll();
    return response;
  }

  async getUser(id: User['id']) {
    const user = await sequelize.models.User.findByPk(id);

    if (!user) {
      throw boom.notFound('user not found');
    }

    return user;
  }

  async update(id: User['id'], changes: UpdateUserDto) {
    const user = await this.getUser(id);
    const response = await user.update(changes);

    return response;
  }

  async delete(id: User['id']) {
    const user = await this.getUser(id);
    await user.destroy();

    return { id };
  }
}

export default UsersService;
