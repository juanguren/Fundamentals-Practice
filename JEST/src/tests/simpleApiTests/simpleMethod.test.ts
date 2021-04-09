
import { 
    simpleStuff,
    getUsers
} from '../../controllers/simpleMethod';
import UserSchema from "../../database/config";
import  httpMock from 'node-mocks-http';
import { faultyUser, mockUser } from '../mockData/user';

// * Mocks create method to avoid creating an actual DB record
// * Overrides the actual .create() with a mock method that will check if the schema can be correctly called
UserSchema.create = jest.fn();
UserSchema.find = jest.fn();

describe('Test User retrieval from DB', () => {
    let req: any, res: any;
    beforeEach(() => {
        req = httpMock.createRequest();
        res = httpMock.createResponse();

        getUsers(req, res);
    });
    it('Should return a 200', () => {
        expect(res.statusCode).toBe(200);
    });

    it('Should call the find() method correctly', () => {
        expect(UserSchema.find).toHaveBeenCalled();
    });
});
describe('Test User creation middleware', () => {
    let req: any, res: any, next: any;
    const { name, code } = mockUser;

    beforeEach(() => { // Replaces the need to use async syntax
        req = httpMock.createRequest();
        res = httpMock.createResponse();
        next = jest.fn();

        req.body = mockUser; // req.body is now our mock
        simpleStuff(req, res, next); // When called..
    });
    it('Test simple return endpoint', () => {
        expect(typeof simpleStuff).toBe('function');
    });

    it('Test that the model is called and filled with appropiate data', () => {
        expect(UserSchema.create).toBeCalledWith(mockUser); // ..schema will include a mockUser-like body
    });

    it('Should return a 201 status code', () => {
        expect(res.statusCode).toBe(201); // The method will returna 201
    });

    it('Should return a specific JSON object', () => {
        expect(res._getJSONData()).toMatchObject({
            message: `User ${name} succesfully created`, code
        });
    });

    it('Should correctly handle errors', async () => {
        try {
            req.body = faultyUser;
            await simpleStuff(req, res, next);
        } catch (error) {
            expect(error).toMatch('error');
        }
    });
});