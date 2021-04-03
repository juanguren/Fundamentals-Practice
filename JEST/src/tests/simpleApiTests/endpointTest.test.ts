// INTEGRATION TESTS
import request from 'supertest';
import app from '../../server';
import { mockUser } from '../mockData/user';

const endpointURL = '/main/data/create';

describe(`Test ${endpointURL}`, () => {
    it('Should be a POST that creates a DB entry (user)', async () =>{
        const { name, code } = mockUser;
        const response = await request(app)
            .post(endpointURL)
            .send(mockUser);

        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({
            message: `User ${name} succesfully created`, code
        });
    });
});


