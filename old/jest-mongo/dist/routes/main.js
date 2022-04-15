"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiMethod_1 = require("../controllers/apiMethod");
const simpleMethod_1 = require("../controllers/simpleMethod");
const mainRouter = express_1.Router();
mainRouter.use(express_1.json());
mainRouter.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date();
    console.log(date);
    next();
}));
mainRouter.get('/shouldI', apiMethod_1.shouldI);
mainRouter.get('/data/get', simpleMethod_1.getUsers);
mainRouter.get('/data/get/:userCode', simpleMethod_1.getUserById);
mainRouter.post('/data/create', simpleMethod_1.createUser);
mainRouter.put('/data/update/:userCode', simpleMethod_1.updateUser);
mainRouter.delete('/data/delete/:userCode', simpleMethod_1.deleteUser);
exports.default = mainRouter;
