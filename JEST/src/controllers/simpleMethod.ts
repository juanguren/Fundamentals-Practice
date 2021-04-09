
import { Request, Response, NextFunction } from 'express';
import UserSchema from '../database/config';

const simpleStuff = async(
    req : Request,
    res: Response,
    _next: NextFunction
) => {
    try {
        const { name, code } = req.body;
        await UserSchema.create(req.body);
        res.status(201).json({ message: `User ${name} succesfully created`, code });
    } catch (error) {
        const { errors: errorMessage } = error;
        res.status(400).json({ 
            message: 'Error creating user',
            errorMessage: errorMessage || error 
        });
    }
};

const getUsers = async (
    _req: Request,
    res: Response
) => {
    const response = await UserSchema.find();
    res.status(200).json(response);
}

export {
    simpleStuff,
    getUsers
}