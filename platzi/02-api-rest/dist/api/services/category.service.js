"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const boom_1 = __importDefault(require("@hapi/boom"));
class CategoriesService {
    constructor() {
        this.categories = [];
        this.generate();
    }
    generate() {
        const limit = 10;
        for (let i = 0; i < limit; i++) {
            let user = {
                id: faker_1.faker.datatype.uuid(),
                category: faker_1.faker.commerce.department(),
            };
            this.categories.push(user);
        }
    }
    async create(data) {
        const newCategory = {
            id: faker_1.faker.datatype.uuid(),
            ...data
        };
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
    async getCategory(id) {
        const category = this.categories.find(user => user.id === id);
        if (!category)
            throw boom_1.default.notFound('category not found');
        return category;
    }
    async update(id, changes) {
        const index = this.categories.findIndex(category => category.id === id);
        if (index === -1)
            throw boom_1.default.notFound('category not found');
        const prevData = this.categories[index];
        this.categories[index] = { ...prevData, ...changes };
        return this.categories[index];
    }
    async delete(id) {
        const index = this.categories.findIndex(category => category.id === id);
        if (index === -1)
            throw boom_1.default.notFound('category not found');
        this.categories.splice(index, 1);
        return { id };
    }
}
exports.default = CategoriesService;
