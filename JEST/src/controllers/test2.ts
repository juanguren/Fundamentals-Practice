
import { Request, Response, NextFunction } from 'express';
import dataObject from '../data/mockData';
import UserSchema from '../model/mongo';
import { ProfessionEnum } from '../model/mongo';

const simpleStuff = (
    req : Request,
    res: Response
) => {
    const { data } = req.params;
    UserSchema.create(req.body);
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