
import { Request, Response, NextFunction } from 'express';
import UserSchema from '../database/Users/users.model';
import { 
    findOrCreate,
    findByCode
 } from "../database/Users/users.statics";

const simpleStuff = async(
    req : Request,
    res: Response
) => {
    try {
        const { code } = req.body;
        const userResponse = await findOrCreate(req.body, code);
        res.status(200).json(userResponse)
    } catch (error) {
        res.status(400).json({ error })
    }
};

const getUsers = async (
    req: Request,
    res: Response
) => {
    const { code: userCode } = req.params;
    const response = await UserSchema.findOne({ code: userCode });
    if (response) {
        return res.json(response)   
    } else{
        const fullResponse = await UserSchema.find();
        res.json(fullResponse);
    }
}

export {
    simpleStuff,
    getUsers
}