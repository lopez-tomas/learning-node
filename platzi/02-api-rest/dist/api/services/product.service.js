"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const boom_1 = __importDefault(require("@hapi/boom"));
class ProductsService {
    constructor() {
        this.products = [];
        this.generate();
    }
    generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            let product = {
                id: faker_1.faker.datatype.uuid(),
                name: faker_1.faker.commerce.productName(),
                price: parseFloat(faker_1.faker.commerce.price()),
                description: faker_1.faker.commerce.productDescription(),
                image: faker_1.faker.image.imageUrl(),
                idCategory: faker_1.faker.datatype.uuid(),
                isBlocked: faker_1.faker.datatype.boolean(),
            };
            this.products.push(product);
        }
    }
    async create(data) {
        const newProduct = {
            id: faker_1.faker.datatype.uuid(),
            ...data
        };
        this.products.push(newProduct);
        return newProduct;
    }
    async get() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products);
            }, 5000);
        });
    }
    async getProduct(id) {
        const product = this.products.find(product => product.id === id);
        if (!product)
            throw boom_1.default.notFound('product not found');
        if (product.isBlocked)
            throw boom_1.default.conflict('product is blocked');
        return product;
    }
    async update(id, changes) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1)
            throw boom_1.default.notFound('product not found');
        const prevData = this.products[index];
        this.products[index] = { ...prevData, ...changes };
        return this.products[index];
    }
    async delete(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1)
            throw boom_1.default.notFound('product not found');
        this.products.splice(index, 1);
        return { id };
    }
}
exports.default = ProductsService;
