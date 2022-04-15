"use strict";
// Static methods that will serve as shorcuts for basic Model operations (CRUD)
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
exports.findByCode = exports.findOrCreate = void 0;
const users_model_1 = __importDefault(require("./users.model"));
const findOrCreate = (data, userCode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const record = yield users_model_1.default.findOne({ id: userCode });
        if (record) {
            return record;
        }
        else {
            return yield users_model_1.default.create(data);
        }
    }
    catch (error) {
        return error;
    }
});
exports.findOrCreate = findOrCreate;
const findByCode = (userCode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield users_model_1.default.findOne({ code: userCode });
    }
    catch (error) {
        return error;
    }
});
exports.findByCode = findByCode;
