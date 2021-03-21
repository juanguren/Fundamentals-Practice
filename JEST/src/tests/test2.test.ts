
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
    let req: any, res: any;

    beforeEach(() => {
        req = httpMock.createRequest();
        res = httpMock.createResponse();

        req.body = mockUser;
        simpleStuff(req, res); // When called..
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
            message: true
        });
    });
});