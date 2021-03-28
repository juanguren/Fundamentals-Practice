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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiMethod_1 = require("../controllers/apiMethod");
const simpleMethod_1 = require("../controllers/simpleMethod");
const logs_model_1 = __importDefault(require("../database/Logs/logs.model"));
const mainRouter = express_1.Router();
mainRouter.use(express_1.json());
mainRouter.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const date = new Date();
        const route = req.originalUrl;
        yield logs_model_1.default.create({ route, date });
        next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}));
mainRouter.get('/shouldI', apiMethod_1.shouldI);
mainRouter.post('/data/create', simpleMethod_1.simpleStuff);
mainRouter.get('/data/get/:code', simpleMethod_1.getUsers);
exports.default = mainRouter;
