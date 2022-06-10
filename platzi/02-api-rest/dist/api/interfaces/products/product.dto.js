"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.getProductSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string().uuid();
const name = joi_1.default.string().min(3);
const price = joi_1.default.number().min(1.0).strict();
const description = joi_1.default.string().min(10);
const image = joi_1.default.string().dataUri();
const idCategory = joi_1.default.string().uuid();
const isBlocked = joi_1.default.boolean();
const createProductSchema = joi_1.default.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    image: image,
    idCategory: idCategory.required(),
    isBlocked: isBlocked.required(),
});
exports.createProductSchema = createProductSchema;
const getProductSchema = joi_1.default.object({
    id: id.required(),
});
exports.getProductSchema = getProductSchema;
const updateProductSchema = joi_1.default.object({
    name: name,
    price: price,
    description: description,
    image: image,
    idCategory: idCategory,
    isBlocked: isBlocked,
});
exports.updateProductSchema = updateProductSchema;
