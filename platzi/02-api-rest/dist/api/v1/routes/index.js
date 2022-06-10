"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_router_1 = require("./users.router");
const products_router_1 = require("./products.router");
const categories_router_1 = require("./categories.router");
const routerApi = (app) => {
    const router = (0, express_1.Router)();
    app.use('/api/v1', router);
    router.use('/users', users_router_1.router);
    router.use('/products', products_router_1.router);
    router.use('/categories', categories_router_1.router);
};
exports.default = routerApi;
