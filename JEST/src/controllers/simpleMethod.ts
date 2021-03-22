
import { Request, Response, NextFunction } from 'express';
import UserSchema from '../database/config';

const simpleStuff = async(
    req : Request,
    res: Response
) => {
    try {
        UserSchema.create(req.body);
        res.status(201).json({ message: true })
    } catch (error) {
        res.status(400).json({ message: 'Error', error })
    }
};

/*UserSchema.create({
    professionType: 'RETIRED',
    admin: '',
    age: '12',
    income: 50000,
    name: 'HUGO',
    _id: 500
});*/

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