"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiMethod_1 = require("../controllers/apiMethod");
const simpleMethod_1 = require("../controllers/simpleMethod");
const mainRouter = express_1.Router();
mainRouter.use(express_1.json());
mainRouter.use((_req, _res, next) => {
    const date = new Date();
    console.log(date);
    next();
});
mainRouter.get('/shouldI', apiMethod_1.shouldI);
mainRouter.post('/data/create', simpleMethod_1.simpleStuff);
mainRouter.get('/data/get', simpleMethod_1.getUsers);
exports.default = mainRouter;
