
import { Request, Response, NextFunction } from 'express';
import dataObject from '../data/mockData';
import UserSchema from '../model/mongo';
import { ProfessionEnum } from '../model/mongo';

const simpleStuff = (
    req : Request,
    res: Response
) => {
    UserSchema.create(req.body);
    res.status(201).json({ message: true })
};

const modelTestNoExpress = () => {
}

/*UserSchema.create({
    professionType: 'RETIRED',
    admin: '',
    age: '12',
    income: 50000,
    name: 'HUGO',
    _id: 500
});*/

export {
    simpleStuff,
    modelTestNoExpress
}