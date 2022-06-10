"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
class UsersService {
    constructor() {
        this.users = [];
        this.generate();
    }
    generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            let user = {
                id: faker_1.faker.datatype.uuid(),
                name: faker_1.faker.name.firstName() + faker_1.faker.name.lastName(),
                email: `${faker_1.faker.name.firstName()}@${faker_1.faker.name.lastName()}.com`
            };
            this.users.push(user);
        }
    }
    get() {
        return this.users;
    }
    getUser(id) {
        return this.users.find(user => user.id === id);
    }
}
exports.default = UsersService;
