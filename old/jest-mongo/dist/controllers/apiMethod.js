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
exports.shouldI = void 0;
const axios_1 = __importDefault(require("axios"));
const shouldI = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://shouldideploy.today/api?tz=UTC';
    try {
        const request = yield axios_1.default.get(url)
            .catch((error) => { throw Error(error); });
        const shouldIDeploy = request.data;
        const finalResponse = {
            shouldIDeploy: {
                message: shouldIDeploy.message,
                shouldI: shouldIDeploy.shouldideploy,
                myResponse: shouldIDeploy.shouldideploy
                    ? 'WOHOOO'
                    : 'SHIT'
            }
        };
        return res.status(200).json(finalResponse);
    }
    catch (error) {
        return res.status(400).json({ message: 'Error' });
    }
});
exports.shouldI = shouldI;
