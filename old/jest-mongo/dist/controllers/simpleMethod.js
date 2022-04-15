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
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const users_model_1 = __importDefault(require("../database/Users/users.model"));
const createUser = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, code } = req.body;
        yield users_model_1.default.create(req.body);
        res.status(201).json({ message: `User ${name} succesfully created`, code });
    }
    catch (error) {
        const { errors: errorMessage } = error;
        res.status(400).json({
            message: 'Error creating user',
            errorMessage: errorMessage || error
        });
    }
});
exports.createUser = createUser;
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield users_model_1.default.find();
        res.status(200).json(response);
    }
    catch (error) {
        return res.status(400).json({ error: 'There was an error' });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userCode } = req.params;
        const response = yield users_model_1.default.findOne({ code: userCode });
        if (response) {
            return res.status(200).json(response);
        }
        else {
            return res.status(404).json({
                message: `User ${userCode} doesn't exist!`
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userCode } = req.params;
    try {
        const { income } = req.body;
        const updateResponse = yield users_model_1.default.findOneAndUpdate({ code: userCode }, { income });
        if (updateResponse) {
            const { name } = updateResponse;
            res.status(201).json({
                message: `User *${name}* correctly modified`,
                updateResponse
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: `Error updating user ${userCode}` });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userCode } = req.params;
    try {
        if (userCode) {
            const deleteResponse = yield users_model_1.default.findOneAndDelete({ code: userCode });
            if (deleteResponse) {
                res.status(204).send();
            }
            else {
                res.status(404).json({ message: "User doesn't exist" });
            }
        }
        else {
            res.status(400).json({ message: "Please provide a userCode" });
        }
    }
    catch (error) {
        res.json(error);
    }
});
exports.deleteUser = deleteUser;
