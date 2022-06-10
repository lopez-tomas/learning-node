"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = exports.ProductsService = exports.UsersService = void 0;
const user_service_1 = __importDefault(require("./user.service"));
exports.UsersService = user_service_1.default;
const product_service_1 = __importDefault(require("./product.service"));
exports.ProductsService = product_service_1.default;
const category_service_1 = __importDefault(require("./category.service"));
exports.CategoriesService = category_service_1.default;
