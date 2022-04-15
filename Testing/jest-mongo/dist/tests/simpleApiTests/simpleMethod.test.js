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
const simpleMethod_1 = require("../../controllers/simpleMethod");
const users_model_1 = __importDefault(require("../../database/Users/users.model"));
const node_mocks_http_1 = __importDefault(require("node-mocks-http"));
const user_1 = require("../mockData/user");
// * Mocks create method to avoid creating an actual DB record
// * Overrides the actual .create() with a mock method that will check if the schema can be correctly called
/*UserSchema.create = jest.fn();
UserSchema.find = jest.fn();
UserSchema.findOne = jest.fn();
UserSchema.findOneAndUpdate = jest.fn();
UserSchema.findOneAndDelete = jest.fn();*/
jest.mock("../../database/Users/users.model"); // * Mocking the entire model
describe('Test get users by ID method', () => {
    let req, res;
    const testParam = '2569';
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        req = node_mocks_http_1.default.createRequest();
        res = node_mocks_http_1.default.createResponse();
    }));
    it('Should call schemas operation', () => __awaiter(void 0, void 0, void 0, function* () {
        req.params.userCode = testParam;
        yield simpleMethod_1.getUserById(req, res);
        expect(users_model_1.default.findOne).toBeCalledWith({ code: testParam });
    }));
    it("Should return a correct JSON body and a 200 response code", () => __awaiter(void 0, void 0, void 0, function* () {
        req.params.userCode = testParam;
        users_model_1.default.findOne.mockReturnValue(user_1.mockResponseById);
        yield simpleMethod_1.getUserById(req, res);
        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toStrictEqual(user_1.mockResponseById);
    }));
    it('Should correctly return an error status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const rejected = Promise.reject();
        users_model_1.default.findOne.mockReturnValue(rejected);
        yield simpleMethod_1.getUserById(req, res);
        expect(res.statusCode).toBe(400);
    }));
    it('Should catch errors correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        let wrongParam = 'HEY';
        req.params.userCode = wrongParam;
        const rejected = Promise.reject();
        users_model_1.default.findOne.mockReturnValue(rejected);
        yield simpleMethod_1.getUserById(req, res);
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._isJSON()).toBeTruthy();
    }));
    it('Should return a 404 in case no users found (null) + appropiate message', () => __awaiter(void 0, void 0, void 0, function* () {
        let wrongParam = 'HEY';
        req.params.userCode = wrongParam;
        users_model_1.default.findOne.mockReturnValue(null);
        yield simpleMethod_1.getUserById(req, res);
        expect(res.statusCode).toBe(404);
        expect(res._getJSONData()).toMatchObject({
            message: `User ${wrongParam} doesn't exist!`
        });
    }));
});
describe('Test User retrieval from DB (GET)', () => {
    let req, res;
    beforeEach(() => {
        req = node_mocks_http_1.default.createRequest();
        res = node_mocks_http_1.default.createResponse();
        simpleMethod_1.getUsers(req, res);
    });
    it('Should return a 200', () => {
        expect(res.statusCode).toBe(200);
    });
    it('Should call the find() method correctly', () => {
        expect(users_model_1.default.find).toHaveBeenCalled();
    });
    it('Should return Model response (Users)', () => __awaiter(void 0, void 0, void 0, function* () {
        users_model_1.default.find.mockReturnValue(user_1.mockResponse);
        yield simpleMethod_1.getUsers(req, res);
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._getJSONData()).toStrictEqual(user_1.mockResponse);
    }));
    it('Should correctly handle errors', () => __awaiter(void 0, void 0, void 0, function* () {
        const rejected = Promise.reject();
        users_model_1.default.find.mockReturnValue(rejected);
        yield simpleMethod_1.getUsers(req, res);
        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toMatchObject({
            error: 'There was an error'
        });
    }));
});
describe('Test User creation middleware (POST)', () => {
    let req, res, next;
    const { name, code } = user_1.mockUser;
    beforeEach(() => {
        req = node_mocks_http_1.default.createRequest();
        res = node_mocks_http_1.default.createResponse();
        next = jest.fn();
        req.body = user_1.mockUser; // req.body is now our mock
        simpleMethod_1.createUser(req, res, next); // When called..
    });
    it('Test simple return endpoint', () => {
        expect(typeof simpleMethod_1.createUser).toBe('function');
    });
    it('Test that the model is called and filled with appropiate data', () => {
        expect(users_model_1.default.create).toBeCalledWith(user_1.mockUser); // ..schema will include a mockUser-like body
    });
    it('Should return a 201 status code', () => {
        expect(res.statusCode).toBe(201); // The method will returna 201
    });
    it('Should return a specific JSON object', () => {
        expect(res._getJSONData()).toMatchObject({
            message: `User ${name} succesfully created`, code
        });
    });
    it('Should correctly handle errors', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            req.body = user_1.faultyUser;
            yield simpleMethod_1.createUser(req, res, next);
        }
        catch (error) {
            expect(error).toMatch('error');
        }
    }));
});
describe('Test User update (PUT)', () => {
    let req, res;
    let updatedIncome = 76500;
    let userCode = '2569';
    let wrongCode = 'HEY';
    const name = 'Juan';
    const correctPutMessage = {
        message: `User *${name}* correctly modified`,
        updateResponse: user_1.mockResponseById
    };
    beforeEach(() => {
        req = node_mocks_http_1.default.createRequest();
        res = node_mocks_http_1.default.createResponse();
    });
    it('Should call schemas operation', () => __awaiter(void 0, void 0, void 0, function* () {
        yield simpleMethod_1.updateUser(req, res);
        expect(users_model_1.default.findOneAndUpdate).toBeCalled();
    }));
    it('Should correctly update user and return message', () => __awaiter(void 0, void 0, void 0, function* () {
        req.body.income = updatedIncome;
        req.params.userCode = userCode;
        yield simpleMethod_1.updateUser(req, res);
        expect(users_model_1.default.findOneAndUpdate).toHaveBeenCalledWith({ code: userCode }, { income: updatedIncome });
    }));
    it('Should call schemas operation', () => __awaiter(void 0, void 0, void 0, function* () {
        req.body.income = updatedIncome;
        req.params.userCode = userCode;
        users_model_1.default.findOneAndUpdate.mockReturnValue(user_1.mockResponseById);
        yield simpleMethod_1.updateUser(req, res);
        expect(res._getJSONData()).toStrictEqual(correctPutMessage);
        expect(res.statusCode).toBe(201);
    }));
    it('Should correctly handle errors', () => __awaiter(void 0, void 0, void 0, function* () {
        req.params.userCode = 'HEY';
        const rejected = Promise.reject();
        users_model_1.default.findOneAndUpdate.mockReturnValue(rejected);
        yield simpleMethod_1.updateUser(req, res);
        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toMatchObject({
            message: `Error updating user ${wrongCode}`
        });
    }));
});
describe('Test User deletion (DELETE)', () => {
    let req, res;
    let userCode = '887KPA';
    beforeEach(() => {
        req = node_mocks_http_1.default.createRequest();
        res = node_mocks_http_1.default.createResponse();
        req.params.userCode = userCode;
    });
    it('Should call delete schema operation', () => __awaiter(void 0, void 0, void 0, function* () {
        yield simpleMethod_1.deleteUser(req, res);
        expect(users_model_1.default.findOneAndDelete).toBeCalled();
        expect(users_model_1.default.findOneAndDelete).toBeCalledWith({ code: userCode });
    }));
    it('Should return a correct status code', () => __awaiter(void 0, void 0, void 0, function* () {
        req.params.userCode = userCode;
        yield simpleMethod_1.deleteUser(req, res);
        expect(res.statusCode).toBe(204);
    }));
    it('Should fail if theres no param', () => __awaiter(void 0, void 0, void 0, function* () {
        req.params.userCode = null;
        yield simpleMethod_1.deleteUser(req, res);
        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toMatchObject({
            message: "Please provide a userCode"
        });
    }));
    it('Should fail if user is non-existant', () => __awaiter(void 0, void 0, void 0, function* () {
        req.params.userCode = 'HEYYY';
        yield simpleMethod_1.deleteUser(req, res);
        expect(res._getJSONData()).toMatchObject({
            message: "User doesn't exist"
        });
        expect(res.statusCode).toBe(404);
    }));
});
