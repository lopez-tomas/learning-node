"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const { faker } = require('@faker-js/faker');
const router = express_1.default.Router();
exports.router = router;
router.get('/', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for (let i = 0; i < limit; i++) {
        products.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseFloat(faker.commerce.price()),
            image: faker.image.imageUrl()
        });
    }
    res.json(products);
});
router.get('/filter', (req, res) => {
    res.send('I am a filter');
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
    });
});
