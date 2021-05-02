
import { 
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../../controllers/simpleMethod';
import UserSchema from "../../database/Users/users.model";
import  httpMock from 'node-mocks-http';
import { 
    faultyUser,
    mockUser,
    mockResponse,
    mockResponseById
} from '../mockData/user';

// * Mocks create method to avoid creating an actual DB record
// * Overrides the actual .create() with a mock method that will check if the schema can be correctly called
/*UserSchema.create = jest.fn();
UserSchema.find = jest.fn();
UserSchema.findOne = jest.fn();
UserSchema.findOneAndUpdate = jest.fn();
UserSchema.findOneAndDelete = jest.fn();*/

jest.mock("../../database/Users/users.model"); // * Mocking the entire model

describe('Test get users by ID method', () => {
    let req: any, res: any;
    const testParam = '2569';
    beforeAll( async () => {
        req = httpMock.createRequest();
        res = httpMock.createResponse();
    });
    it('Should call schemas operation', async () => {
        req.params.userCode = testParam;
        await getUserById(req, res);
        expect(UserSchema.findOne).toBeCalledWith({ code: testParam });
    });
    it("Should return a correct JSON body and a 200 response code", async() => {
        req.params.userCode = testParam;
        (UserSchema.findOne as jest.Mock).mockReturnValue(mockResponseById);
        await getUserById(req, res);

        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toStrictEqual(mockResponseById);
    });
    it('Should correctly return an error status code', async () => {
        const rejected = Promise.reject();
        (UserSchema.findOne as jest.Mock).mockReturnValue(rejected);
        await getUserById(req, res);
        expect(res.statusCode).toBe(400);
    });
    it('Should catch errors correctly', async () => {
        let wrongParam = 'HEY';
        req.params.userCode = wrongParam;
        
        const rejected = Promise.reject();
        (UserSchema.findOne as jest.Mock).mockReturnValue(rejected);
        await getUserById(req, res);

        expect(res._isEndCalled()).toBeTruthy();
        expect(res._isJSON()).toBeTruthy();
    });
    it('Should return a 404 in case no users found (null) + appropiate message', async () => {
        let wrongParam = 'HEY';
        req.params.userCode = wrongParam;
        (UserSchema.findOne as jest.Mock).mockReturnValue(null);
        await getUserById(req, res);

        expect(res.statusCode).toBe(404);
        expect(res._getJSONData()).toMatchObject({
            message: `User ${wrongParam} doesn't exist!`
        });
    });
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

describe('Test User update (PUT)', () => {
    let req: any, res: any;
    let updatedIncome = 76500;
    let userCode = '2569';
    let wrongCode = 'HEY';
    const name = 'Juan';

    const correctPutMessage = {
        message: `User *${name}* correctly modified`,
        updateResponse: mockResponseById
    }
    beforeEach(() => {
        req = httpMock.createRequest();
        res = httpMock.createResponse();
    });

    it('Should call schemas operation', async () => {
        await updateUser(req, res);
        expect(UserSchema.findOneAndUpdate).toBeCalled();
    });

    it('Should correctly update user and return message', async () => {
        req.body.income = updatedIncome;
        req.params.userCode = userCode;
        
        await updateUser(req, res);
        expect(UserSchema.findOneAndUpdate).toHaveBeenCalledWith({ code: userCode }, { income: updatedIncome });
    });

    it('Should call schemas operation', async () => {
        req.body.income = updatedIncome;
        req.params.userCode = userCode;
        (UserSchema.findOneAndUpdate as jest.Mock).mockReturnValue(mockResponseById);
        await updateUser(req, res);

        expect(res._getJSONData()).toStrictEqual(correctPutMessage);
        expect(res.statusCode).toBe(201);
    });
    it('Should correctly handle errors', async () => {
        req.params.userCode = 'HEY';
        const rejected = Promise.reject();
        (UserSchema.findOneAndUpdate as jest.Mock).mockReturnValue(rejected);
        await updateUser(req, res);

        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toMatchObject({
            message: `Error updating user ${wrongCode}`
        });
    });
});

describe('Test User deletion (DELETE)', () => {
    let req: any, res: any;
    let userCode = '887KPA';
    beforeEach(() =>{
        req = httpMock.createRequest();
        res = httpMock.createResponse();

        req.params.userCode = userCode;
    });
    it('Should call delete schema operation', async () => {
        await deleteUser(req, res);
        expect(UserSchema.findOneAndDelete).toBeCalled();
    });
    it('Should return a correct status code', async () => {
        req.params.userCode = userCode;
        await deleteUser(req, res);
        expect(res.statusCode).toBe(204);
    });
    it('Should fail if theres no param', async () => {
        req.params.userCode = null;
        await deleteUser(req, res);

        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toMatchObject({
            message: "Please provide a userCode"
        });
    });
    it('Should fail if user is non-existant', async () => {
        req.params.userCode = 'HEYYY';
        await deleteUser(req, res);
        expect(res._getJSONData()).toMatchObject({
            message: "User doesn't exist"
        });
        expect(res.statusCode).toBe(404);
    });
});