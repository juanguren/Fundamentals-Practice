
// Static methods that will serve as shorcuts for basic Model operations (CRUD)

import { IUser } from "./users.types";
import UserSchema from "./users.model";

export const findOrCreate = async (
    data: IUser,
    userId: string
): Promise<IUser> => {
    try {
        const record = await UserSchema.findOne({ id: userId });
        if (record) {
            return record;
        } else{
            const res = await UserSchema.create( data );
            return res;
        }
    } catch (error) {
        return error;
    }
};

export const findByCode = async (
    model: IUser,
    userCode: string
): Promise<IUser[]> => {
    try {
        return await UserSchema.find({ id: userCode });
    } catch (error) {
        return error;
    }
};