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
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    }
    else {
        res.json([
            {
                id: faker_1.faker.datatype.uuid(),
                name: 'Peter Parker',
                email: 'spider@man.com',
            },
            {
                id: faker_1.faker.datatype.uuid(),
                name: 'Anthony Stark',
                email: 'iron@man.com',
            },
            {
                id: faker_1.faker.datatype.uuid(),
                name: 'Reed Richards',
                email: 'mr@fantastic.com',
            },
        ]);
    }
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'John Doe',
        email: 'john@doe.com',
    });
});
router.get('/:id/orders', (req, res) => {
    const { id } = req.params;
    res.json({
        userId: id,
        orders: [
            {
                id: faker_1.faker.datatype.uuid(),
                date: faker_1.faker.date.recent(),
                products: [
                    {
                        id: faker_1.faker.datatype.uuid(),
                        name: faker_1.faker.commerce.productName(),
                        price: parseFloat(faker_1.faker.commerce.price()),
                        isNew: faker_1.faker.datatype.boolean(),
                        tags: faker_1.faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
                    }
                ],
                total: parseFloat(faker_1.faker.commerce.price()),
                method: faker_1.faker.helpers.arrayElement(['Mercado Pago', 'Efectivo', 'Transferencia', 'Bitcoin']),
            },
            {
                id: faker_1.faker.datatype.uuid(),
                date: faker_1.faker.date.recent(),
                products: [
                    {
                        id: faker_1.faker.datatype.uuid(),
                        name: faker_1.faker.commerce.productName(),
                        price: parseFloat(faker_1.faker.commerce.price()),
                        isNew: faker_1.faker.datatype.boolean(),
                        tags: faker_1.faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
                    },
                    {
                        id: faker_1.faker.datatype.uuid(),
                        name: faker_1.faker.commerce.productName(),
                        price: parseFloat(faker_1.faker.commerce.price()),
                        isNew: faker_1.faker.datatype.boolean(),
                        tags: faker_1.faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
                    }
                ],
                total: parseFloat(faker_1.faker.commerce.price()),
                method: faker_1.faker.helpers.arrayElement(['Mercado Pago', 'Efectivo', 'Transferencia', 'Bitcoin']),
            },
        ]
    });
});
router.get('/:userId/orders/:orderId', (req, res) => {
    const { userId, orderId } = req.params;
    res.json({
        userId,
        orderId,
        date: faker_1.faker.date.recent(),
        products: [
            {
                id: faker_1.faker.datatype.uuid(),
                name: faker_1.faker.commerce.productName(),
                price: parseFloat(faker_1.faker.commerce.price()),
                isNew: faker_1.faker.datatype.boolean(),
                tags: faker_1.faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
            }
        ],
        total: parseFloat(faker_1.faker.commerce.price()),
        method: faker_1.faker.helpers.arrayElement(['Mercado Pago', 'Efectivo', 'Transferencia', 'Bitcoin']),
    });
});
