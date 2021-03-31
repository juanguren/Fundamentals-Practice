
import { 
    simpleStuff
} from '../controllers/simpleMethod';
import UserSchema from "../database/Users/users.model";
import  httpMock from 'node-mocks-http';
import { mockUser } from './mockData/user';
import { findOrCreate } from "../database/Users/users.statics";

// * Mocks create method to avoid creating an actual DB record
// * Overrides the actual .create() with a mock method that will check if the schema can be correctly called
UserSchema.create = jest.fn();

describe('Simple Middleware Tests', () => {
    let req: any, res: any;
    const { code, name } = mockUser;

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
        expect(res.statusCode).toBe(200); // The method will returna 201
    });

    it('Should return a specific JSON object', async () => {
        expect(await res._getJSONData()).toMatchObject({
            message: `User${name} was correctly created`,
            code
        });
    });
});