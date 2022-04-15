
import { Request, Response, NextFunction } from 'express';
import UserSchema from '../database/Users/users.model';
import { 
    findOrCreate,
    findByCode
 } from "../database/Users/users.statics";

const createUser = async(
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
    try {
        const response = await UserSchema.find();
        res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: 'There was an error' });
    }
}

const getUserById = async (
    req: Request,
    res: Response
) => {
    try {
        const { userCode } = req.params;
        const response = await UserSchema.findOne({ code: userCode });
        if (response) {
            return res.status(200).json(response);   
        } else{
            return res.status(404).json({ 
                message: `User ${userCode} doesn't exist!` 
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }
}

const updateUser = async (
    req: Request,
    res: Response
) => {
    const { userCode } = req.params;
    try {
        const { income } = req.body;
        const updateResponse = await UserSchema.findOneAndUpdate({ code: userCode }, { income });   
        if (updateResponse) {
            const { name } = updateResponse;
            res.status(201).json({ 
                message: `User *${name}* correctly modified`,
                updateResponse
            });
        }
    } catch (error) {
        res.status(400).json({ message: `Error updating user ${userCode}` });
    }
}

const deleteUser = async (
    req: Request,
    res: Response
) => {
    const { userCode } = req.params;
    try {
        if (userCode) {
            const deleteResponse = await UserSchema.findOneAndDelete({ code: userCode });
            if (deleteResponse) {
                res.status(204).send();
            } else{
                res.status(404).json({ message: "User doesn't exist" });
            }
        } else{
            res.status(400).json({ message: "Please provide a userCode" });
        }
    } catch (error) {
        res.json(error);
    }
}

export {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}