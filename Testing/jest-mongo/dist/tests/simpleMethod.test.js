"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simpleMethod_1 = require("../controllers/simpleMethod");
const users_model_1 = __importDefault(require("../database/Users/users.model"));
const node_mocks_http_1 = __importDefault(require("node-mocks-http"));
const user_1 = require("./mockData/user");
// * Mocks create method to avoid creating an actual DB record
// * Overrides the actual .create() with a mock method that will check if the schema can be correctly called
users_model_1.default.create = jest.fn();
describe('Simple Middleware Tests', () => {
    let req, res;
    beforeEach(() => {
        req = node_mocks_http_1.default.createRequest();
        res = node_mocks_http_1.default.createResponse();
        req.body = user_1.mockUser;
        simpleMethod_1.simpleStuff(req, res); // When called..
    });
    it('Test simple return endpoint', () => {
        expect(typeof simpleMethod_1.simpleStuff).toBe('function');
    });
    it('Test that the model is called and filled with appropiate data', () => {
        expect(users_model_1.default.create).toBeCalledWith(user_1.mockUser); // ..schema will include a mockUser-like body
    });
    it('Should return a 201 status code', () => {
        expect(res.statusCode).toBe(201); // The method will returna 201
    });
    it('Should return a specific JSON object', () => {
        expect(res._getJSONData()).toMatchObject({
            message: true
        });
    });
});
