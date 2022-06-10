"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const global_1 = require("../interfaces/global");
const products_1 = require("../interfaces/products");
const services_1 = require("../services");
const validator_handler_1 = require("../middlewares/validator.handler");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const service = new services_1.ProductsService();
router.get('/', async (req, res) => {
    const products = await service.get();
    res.status(global_1.HttpStatusCode.OK).json(products);
});
router.get('/filter', (req, res) => {
    res.send('I am a filter');
});
router.get('/:id', (0, validator_handler_1.validatorHandler)(products_1.getProductSchema, 'params'), async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await service.getProduct(id);
        res.status(global_1.HttpStatusCode.OK).json(product);
    }
    catch (error) {
        next(error);
    }
});
router.post('/', (0, validator_handler_1.validatorHandler)(products_1.createProductSchema, 'body'), async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(global_1.HttpStatusCode.CREATED).json(newProduct);
});
router.patch('/:id', (0, validator_handler_1.validatorHandler)(products_1.getProductSchema, 'params'), (0, validator_handler_1.validatorHandler)(products_1.updateProductSchema, 'body'), async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const product = await service.update(id, body);
        res.status(global_1.HttpStatusCode.ACCEPTED).json(product);
    }
    catch (error) {
        next(error);
    }
});
router.delete('/:id', (0, validator_handler_1.validatorHandler)(products_1.getProductSchema, 'params'), async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await service.delete(id);
        res.status(global_1.HttpStatusCode.OK).json({
            message: 'product deleted',
            response
        });
    }
    catch (error) {
        next(error);
    }
});
