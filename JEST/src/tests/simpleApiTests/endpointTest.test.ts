// INTEGRATION TESTS
import request from 'supertest';
import app from '../../server';
import { 
    mockUser,
    faultyUser
} from '../mockData/user';

const createUserEndpoint = '/main/data/create';
const getUserEndpoint = '/main/data/get';

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
});

