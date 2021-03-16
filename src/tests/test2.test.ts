
import { 
    simpleStuff,
    modelTestNoExpress
} from '../controllers/test2';
import UserSchema from "../model/mongo";
import  httpMock from 'node-mocks-http';
import { mockUser } from './mockData/user';

// * Mocks create method to avoid creating an actual DB record
// * Overrides the actual .create() with a mock method that will check if the schema can be correctly called
UserSchema.create = jest.fn();

describe('Simple Stuff Tests', () => {
    it('Test simple return endpoint', () => {
        expect(typeof simpleStuff).toBe('function');
    });

    it('Test that the model is called and filled with appropiate data', () => {
        let req = httpMock.createRequest();
        req.body = mockUser;

        let res = httpMock.createResponse();
        let next = jest.fn();
        simpleStuff(req, res);
        
        expect(UserSchema.create).toBeCalledWith(req.body);
    });
});