
import { 
    createUser,
    getUsers,
    getUserById,
    updateUser
} from '../../controllers/simpleMethod';
import UserSchema from "../../database/config";
import  httpMock from 'node-mocks-http';
import { 
    faultyUser,
    mockUser,
    mockResponse
} from '../mockData/user';

// * Mocks create method to avoid creating an actual DB record
// * Overrides the actual .create() with a mock method that will check if the schema can be correctly called
UserSchema.create = jest.fn();
UserSchema.find = jest.fn();
UserSchema.findOne = jest.fn();

describe('Test get users by Id method', () => {
    let req: any, res: any;
    beforeAll( async () => {
        req = httpMock.createRequest();
        res = httpMock.createResponse();
    });
    it('Should call schemas operation', async () => {
        req.params.userCode = 'KJ8';
        await getUserById(req, res);
        expect(UserSchema.findOne).toBeCalledWith({ code: req.params.userCode });
    });
    /*it('Should return a 201', async () => {
        req.params.userCode = 'KJ8';
        expect(res.statusCode).toBe(200);
    });*/
});

describe('Test User retrieval from DB (GET)', () => {
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
    it('Should return Model response (Users)', async () => {
        (UserSchema.find as jest.Mock).mockReturnValue(mockResponse);
        await getUsers(req, res);
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._getJSONData()).toStrictEqual(mockResponse);
    });
    it('Should correctly handle errors', async () => {
        const rejected = Promise.reject();
        (UserSchema.find as jest.Mock).mockReturnValue(rejected);
        await getUsers(req, res);
        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toMatchObject({
            error: 'There was an error'
        });
    });
});

describe('Test User creation middleware (POST)', () => {
    let req: any, res: any, next: any;
    const { name, code } = mockUser;

    beforeEach(() => { // Replaces the need to use async syntax
        req = httpMock.createRequest();
        res = httpMock.createResponse();
        next = jest.fn();

        req.body = mockUser; // req.body is now our mock
        createUser(req, res, next); // When called..
    });
    it('Test simple return endpoint', () => {
        expect(typeof createUser).toBe('function');
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
            await createUser(req, res, next);
        } catch (error) {
            expect(error).toMatch('error');
        }
    });
});