"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./api/routes"));
const error_handler_1 = require("./api/middlewares/error.handler");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const whiteList = ['http://localhost:8080', 'https://tomaslopez.dev'];
const options = {
    origin: (origin, callback) => {
        if (whiteList.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Origin not allowed: ' + origin));
        }
    }
};
app.use((0, cors_1.default)(options));
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/api', (req, res) => {
    res.send(`
    Routes:<br />
    /api/users<br />
    /api/products<br />
    /api/categories<br />
  `);
});
(0, routes_1.default)(app);
app.use(error_handler_1.logErrors);
app.use(error_handler_1.boomErrorHandler);
app.use(error_handler_1.errorHandler);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
