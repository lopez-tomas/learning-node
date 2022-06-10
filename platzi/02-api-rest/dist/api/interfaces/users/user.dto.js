"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.getUserSchema = exports.createUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string().uuid();
const name = joi_1.default.string().min(3);
const email = joi_1.default.string().email();
const createUserSchema = joi_1.default.object({
    name: name.required(),
    email: email.required(),
});
exports.createUserSchema = createUserSchema;
const getUserSchema = joi_1.default.object({
    id: id.required(),
});
exports.getUserSchema = getUserSchema;
const updateUserSchema = joi_1.default.object({
    name: name,
    email: email,
});
exports.updateUserSchema = updateUserSchema;
