
import { Request, Response } from 'express';
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
    try {
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
        return res.status(200).json(finalResponse);
    } catch (error) {
        return res.status(400).json({message: 'Error'});
    }
}