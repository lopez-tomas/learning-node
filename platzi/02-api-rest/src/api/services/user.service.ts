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

  create(data: CreateUserDto) {
    const newUser: User = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.users.push(newUser);
    return newUser;
  }

  get() {
    return this.users;
  }

  getUser(id: User['id']) {
    return this.users.find(user => user.id === id);
  }

  update(id: User['id'], changes: UpdateUserDto) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) throw new Error('user not found');

    const prevData = this.users[index];
    this.users[index] = {...prevData, ...changes};

    return this.users[index];
  }

  delete(id: User['id']) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) throw new Error('user not found');

    this.users.splice(index, 1);

    return { id };
  }
}

export default UsersService;
