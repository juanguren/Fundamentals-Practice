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
const apiMethod_1 = require("../controllers/apiMethod");
const node_mocks_http_1 = __importDefault(require("node-mocks-http"));
describe('Testing API middleware', () => {
    let req, res;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        req = node_mocks_http_1.default.createRequest();
        res = node_mocks_http_1.default.createResponse();
        yield apiMethod_1.shouldI(req, res);
    }));
    it('Should return correct API response', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(res._getJSONData()).toMatchObject({
            shouldIDeploy: {
                message: expect.any(String),
                shouldI: expect.any(Boolean),
                myResponse: expect.any(String)
            }
        });
    }));
    it('Should return a 201 status code', () => {
        expect(res.statusCode).toBe(200); // The method will returna 200
    });
    it('Should return a 400 status in case of error', () => {
        expect(res.statusCode).toBe(400);
    });
});
