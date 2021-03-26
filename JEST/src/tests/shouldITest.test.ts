
import request from 'supertest';
import app from '../server';

const endpointURL = '/main/shouldI';

describe(`Test ${endpointURL}`, () => {
    it('Should make a good GET', async () => {
        const response = await request(app)
            .get(endpointURL);
        
        expect(response.status).toBe(200);
    });
});