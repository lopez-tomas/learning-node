"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const faker_1 = require("@faker-js/faker");
const router = express_1.default.Router();
exports.router = router;
router.get('/', (req, res) => {
    res.json([
        {
            id: faker_1.faker.datatype.uuid(),
            category: faker_1.faker.commerce.department(),
        },
        {
            id: faker_1.faker.datatype.uuid(),
            category: faker_1.faker.commerce.department(),
        },
        {
            id: faker_1.faker.datatype.uuid(),
            category: faker_1.faker.commerce.department(),
        },
    ]);
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        category: faker_1.faker.commerce.department(),
    });
});
router.get('/:id/products/', (req, res) => {
    const { id } = req.params;
    res.json({
        categoryId: id,
        name: faker_1.faker.commerce.department(),
        price: parseFloat(faker_1.faker.commerce.price()),
        isNew: faker_1.faker.datatype.boolean(),
        tags: faker_1.faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
    });
});
