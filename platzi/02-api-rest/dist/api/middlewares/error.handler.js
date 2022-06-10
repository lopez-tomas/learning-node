"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boomErrorHandler = exports.errorHandler = exports.logErrors = void 0;
const global_1 = require("../interfaces/global");
const logErrors = (err, req, res, next) => {
    console.log('logErrors');
    console.error(err);
    next(err);
};
exports.logErrors = logErrors;
const errorHandler = (err, req, res, next) => {
    console.log('errorHandler');
    res.status(global_1.HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        message: err.message,
        stack: err.stack
    });
};
exports.errorHandler = errorHandler;
const boomErrorHandler = (err, req, res, next) => {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
};
exports.boomErrorHandler = boomErrorHandler;
