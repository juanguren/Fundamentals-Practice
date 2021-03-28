
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
        const { id } = req.body;
        const userResponse = await findOrCreate(req.body, id);
        res.status(200).json(userResponse)
    } catch (error) {
        res.status(400).json({ error })
    }
};

const getUsers = async (
    req: Request,
    res: Response
) => {
    const { id: userId } = req.params;
    const response = await UserSchema.findOne({ code: userId });
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