"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategorySchema = exports.getCategorySchema = exports.createCategorySchema = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string().uuid();
const category = joi_1.default.string();
const createCategorySchema = joi_1.default.object({
    category: category.required(),
});
exports.createCategorySchema = createCategorySchema;
const getCategorySchema = joi_1.default.object({
    id: id.required(),
});
exports.getCategorySchema = getCategorySchema;
const updateCategorySchema = joi_1.default.object({
    category: category.required(),
});
exports.updateCategorySchema = updateCategorySchema;
