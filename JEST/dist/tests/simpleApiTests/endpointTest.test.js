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
// INTEGRATION TESTS
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const user_1 = require("../mockData/user");
const createUserEndpoint = '/main/data/create';
const getUserEndpoint = '/main/data/get';
const updateUserEndpoint = '/main/data/update';
const deleteUserEndpoint = 'main/data/delete';
describe(`Test ${createUserEndpoint}`, () => {
    it('Should be a POST that creates a DB entry (user)', () => __awaiter(void 0, void 0, void 0, function* () {
        const { name, code } = user_1.mockUser;
        const response = yield supertest_1.default(server_1.default)
            .post(createUserEndpoint)
            .send(user_1.mockUser);
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({
            message: `User ${name} succesfully created`, code
        });
    }));
    it('Should return error in case of missing/invalid/malformed key', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default)
            .post(createUserEndpoint)
            .send(user_1.faultyUser);
        expect(response.status).toBe(400);
    }));
});
describe(`Test ${getUserEndpoint}`, () => {
    it('Should be a GET that freakin works! :D', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default)
            .get(getUserEndpoint);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.any(Array));
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0].code).toBeDefined();
    }));
    it('Should also work when including the query parameter (code)', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default)
            .get(getUserEndpoint)
            .query({ userCode: user_1.mockResponseById.code });
        expect(response.status).toBe(200);
        expect(response.body.income).toBe(user_1.mockResponseById.income);
    }));
    it('Should work also when the provided code is wrong', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default)
            .get(getUserEndpoint)
            .query({ userCode: 'HEYY' });
        expect(response.status).toBe(404);
    }));
});
describe(`Test ${updateUserEndpoint} by ID`, () => {
    it('Should be a PUT by ID that works', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default)
            .put(updateUserEndpoint)
            .query({ userCode: user_1.mockResponseById.code })
            .send({ income: user_1.mockResponseById.income });
        expect(response.status).toBe(201);
        expect(response.body).toContain(user_1.mockResponseById);
    }));
});
describe(`Test ${deleteUserEndpoint}`, () => __awaiter(void 0, void 0, void 0, function* () {
    const getUser = yield supertest_1.default(server_1.default)
        .get(getUserEndpoint);
    const testUserCode = getUser.body[0].code;
    it('Should call endpoint correctly and return correct info', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(server_1.default)
            .get(deleteUserEndpoint)
            .query({ userCode: testUserCode });
        expect(response.status).toBe(204);
        expect(response.body).toMatchObject({
            message: `User ${testUserCode} successfully deleted`
        });
    }));
}));
