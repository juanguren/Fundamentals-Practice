
import { Request, Response, NextFunction } from 'express';
import UserSchema from '../database/config';

const simpleStuff = async(
    req : Request,
    res: Response
) => {
    try {
        const { name, code } = req.body;
        await UserSchema.create(req.body);
        res.status(201).json({ message: `User ${name} succesfully created`, code });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
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