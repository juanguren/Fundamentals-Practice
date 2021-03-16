
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface officialResponse {
    shouldIDeploy: responseObject;
}

interface responseObject {
    shouldI: boolean;
    message: string;
    myResponse?: string; 
}

export const shouldI = async (
    _req: Request,
    res: Response
) => {
    const url = 'https://shouldideploy.today/api?tz=UTC';
    const request : AxiosResponse = await axios.get(url)
        .catch((error) => { throw Error(error) });
    const shouldIDeploy = request.data;
    const finalResponse : officialResponse = {
        shouldIDeploy: {
            message: shouldIDeploy.message,
            shouldI: shouldIDeploy.shouldideploy,
            myResponse: shouldIDeploy.shouldideploy 
                ? 'WOHOOO'
                : 'SHIT'
        }
    };
    return res.json(finalResponse);
}