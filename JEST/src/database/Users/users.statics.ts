
// Static methods that will serve as shorcuts for basic Model operations (CRUD)

import { IUser, IUserModel } from "./users.types";

export const findOrCreate = async (
    model: IUserModel,
    userId: string
): Promise<IUser> => {
    try {
        const record = await model.findOne({ userId });
        if (record) {
            return record;
        } else{
            return model.create({ userId });
        }
    } catch (error) {
        return error;
    }
};

export const findByCode = async (
    model: IUserModel,
    userCode: string
): Promise<IUser[]> => {
    try {
        return await model.find({ code: userCode });
    } catch (error) {
        return error;
    }
};