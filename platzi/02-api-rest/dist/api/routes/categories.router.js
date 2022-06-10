"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const global_1 = require("../interfaces/global");
const category_dto_1 = require("../interfaces/categories/category.dto");
const services_1 = require("../services");
const validator_handler_1 = require("../middlewares/validator.handler");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const service = new services_1.CategoriesService();
router.get('/', (req, res) => {
    const categories = service.get();
    res.status(global_1.HttpStatusCode.OK).json(categories);
});
router.get('/:id', (0, validator_handler_1.validatorHandler)(category_dto_1.getCategorySchema, 'params'), async (req, res, next) => {
    const { id } = req.params;
    try {
        const category = service.getCategory(id);
        res.status(global_1.HttpStatusCode.OK).json(category);
    }
    catch (error) {
        next(error);
    }
});
router.post('/', (0, validator_handler_1.validatorHandler)(category_dto_1.createCategorySchema, 'body'), async (req, res, next) => {
    const body = req.body;
    try {
        const newCategory = service.create(body);
        res.status(global_1.HttpStatusCode.CREATED).json(newCategory);
    }
    catch (error) {
        next(error);
    }
});
router.patch('/:id', (0, validator_handler_1.validatorHandler)(category_dto_1.getCategorySchema, 'params'), (0, validator_handler_1.validatorHandler)(category_dto_1.updateCategorySchema, 'body'), async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const category = service.update(id, body);
        res.status(global_1.HttpStatusCode.OK).json(category);
    }
    catch (error) {
        next(error);
    }
});
router.delete('/:id', (0, validator_handler_1.validatorHandler)(category_dto_1.getCategorySchema, 'params'), async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = service.delete(id);
        res.status(global_1.HttpStatusCode.OK).json({
            message: "category deleted",
            response
        });
    }
    catch (error) {
        next(error);
    }
});
