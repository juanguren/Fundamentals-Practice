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
exports.getUsers = exports.simpleStuff = void 0;
const users_model_1 = __importDefault(require("../database/Users/users.model"));
const users_statics_1 = require("../database/Users/users.statics");
const simpleStuff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.body;
        const userResponse = yield users_statics_1.findOrCreate(req.body, code);
        res.status(200).json(userResponse);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.simpleStuff = simpleStuff;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code: userCode } = req.params;
    const response = yield users_model_1.default.findOne({ code: userCode });
    if (response) {
        return res.json(response);
    }
    else {
        const fullResponse = yield users_model_1.default.find();
        res.json(fullResponse);
    }
});
exports.getUsers = getUsers;
