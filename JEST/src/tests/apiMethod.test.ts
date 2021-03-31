import { shouldI } from '../controllers/apiMethod';
import  httpMock from 'node-mocks-http';

describe('Testing API middleware', () => {
    let req: any, res: any;
    beforeEach( async () => {
        req = httpMock.createRequest();
        res = httpMock.createResponse();
        await shouldI(req, res);
    });
    it('Should return correct API response', async () => {
        expect(res._getJSONData()).toMatchObject({
            shouldIDeploy: {
                message: expect.any(String),
                shouldI: expect.any(Boolean),
                myResponse: expect.any(String)
            }
        })
    }); 
    it('Should return a 201 status code', () => {
        expect(res.statusCode).toBe(200); // The method will return a 200
    });
});