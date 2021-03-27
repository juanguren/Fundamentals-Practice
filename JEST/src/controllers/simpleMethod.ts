
import { Request, Response, NextFunction } from 'express';
import UserSchema from '../database/config';

const simpleStuff = async(
    req : Request,
    res: Response
) => {
    try {
        await UserSchema.create(req.body);
        res.status(201).json({ message: true })
    } catch (error) {
        res.status(400).json({ error })
    }
};

const getUsers = async (
    req: Request,
    res: Response
) => {
    const response = await UserSchema.find();
    res.json(response);
}

export {
    simpleStuff,
    getUsers
}