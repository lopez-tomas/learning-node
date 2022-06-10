"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const global_1 = require("../interfaces/global");
const user_dto_1 = require("../interfaces/users/user.dto");
const services_1 = require("../services");
const validator_handler_1 = require("../middlewares/validator.handler");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const service = new services_1.UsersService();
router.get('/', (req, res) => {
    const users = service.get();
    res.status(global_1.HttpStatusCode.OK).json(users);
});
router.get('/:id', (0, validator_handler_1.validatorHandler)(user_dto_1.getUserSchema, 'params'), async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = service.getUser(id);
        res.status(global_1.HttpStatusCode.OK).json(user);
    }
    catch (error) {
        next(error);
    }
});
router.post('/', (0, validator_handler_1.validatorHandler)(user_dto_1.createUserSchema, 'body'), async (req, res, next) => {
    const body = req.body;
    try {
        const newUser = service.create(body);
        res.status(global_1.HttpStatusCode.CREATED).json(newUser);
    }
    catch (error) {
        next(error);
    }
});
router.patch('/:id', (0, validator_handler_1.validatorHandler)(user_dto_1.getUserSchema, 'params'), (0, validator_handler_1.validatorHandler)(user_dto_1.updateUserSchema, 'body'), async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const user = service.update(id, body);
        res.status(global_1.HttpStatusCode.OK).json(user);
    }
    catch (error) {
        next(error);
    }
});
router.delete('/:id', (0, validator_handler_1.validatorHandler)(user_dto_1.getUserSchema, 'params'), async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = service.delete(id);
        res.status(global_1.HttpStatusCode.OK).json({
            message: 'user deleted',
            response
        });
    }
    catch (error) {
        next(error);
    }
});
