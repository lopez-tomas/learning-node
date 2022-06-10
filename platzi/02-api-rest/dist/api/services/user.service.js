"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const boom_1 = __importDefault(require("@hapi/boom"));
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
    async create(data) {
        const newUser = {
            id: faker_1.faker.datatype.uuid(),
            ...data
        };
        this.users.push(newUser);
        return newUser;
    }
    async get() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.users);
            }, 5000);
        });
    }
    async getUser(id) {
        const product = this.users.find(user => user.id === id);
        if (!product)
            throw boom_1.default.notFound('user not found');
        return product;
    }
    async update(id, changes) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1)
            throw boom_1.default.notFound('user not found');
        const prevData = this.users[index];
        this.users[index] = { ...prevData, ...changes };
        return this.users[index];
    }
    async delete(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1)
            throw boom_1.default.notFound('user not found');
        this.users.splice(index, 1);
        return { id };
    }
}
exports.default = UsersService;
