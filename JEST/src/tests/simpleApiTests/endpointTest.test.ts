// INTEGRATION TESTS
import request from 'supertest';
import app from '../../server';
import { 
    mockUser,
    faultyUser,
    mockResponseById
} from '../mockData/user';

const createUserEndpoint = '/main/data/create';
const getUserEndpoint = '/main/data/get';
const updateUserEndpoint = '/main/data/update';
const deleteUserEndpoint = 'main/data/delete';

describe(`Test ${createUserEndpoint}`, () => {
    it('Should be a POST that creates a DB entry (user)', async () =>{
        const { name, code } = mockUser;
        const response = await request(app)
            .post(createUserEndpoint)
            .send(mockUser);

        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({
            message: `User ${name} succesfully created`, code
        });
    });
    it('Should return error in case of missing/invalid/malformed key', async () => {
        const response = await request(app)
            .post(createUserEndpoint)
            .send(faultyUser);
        expect(response.status).toBe(400);
    });
});

describe(`Test ${getUserEndpoint}`, () => {
    it('Should be a GET that freakin works! :D', async () => {
        const response = await request(app)
            .get(getUserEndpoint);
            
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.any(Array));
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0].code).toBeDefined();
    });
    it('Should also work when including the query parameter (code)', async () => {
        const response = await request(app)
            .get(getUserEndpoint)
            .query({ userCode: mockResponseById.code });
        
        expect(response.status).toBe(200);
        expect(response.body.income).toBe(mockResponseById.income);
    });
});

describe(`Test ${updateUserEndpoint} by ID`, () => {
    it('Should be a PUT by ID that works', async () => {
        const response = await request(app)
            .put(updateUserEndpoint)
            .query({ userCode: mockResponseById.code })
            .send({ income: mockResponseById.income });

        expect(response.status).toBe(201);
        expect(response.body).toContain(mockResponseById);
    });
});

describe(`Test ${deleteUserEndpoint}`, async () => {
    const getUser = await request(app)
    .get(getUserEndpoint);
    const testUserCode : string = getUser.body[0].code;

    it('Should call endpoint correctly and return correct info', async () => {
        const response = await request(app)
            .get(deleteUserEndpoint)
            .query({ userCode: testUserCode });
        
        expect(response.status).toBe(204);
        expect(response.body).toMatchObject({
            message: `User ${testUserCode} successfully deleted`
        });
    });
});



