"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test1_1 = require("../controllers/test1");
const test2_1 = require("../controllers/test2");
const mainRouter = express_1.Router();
mainRouter.use(express_1.json());
mainRouter.use((req, res, next) => {
    const date = new Date();
    console.log(date);
    next();
});
mainRouter.get('/test1', test1_1.shouldI);
mainRouter.get('/return', test2_1.simpleStuff);
exports.default = mainRouter;
