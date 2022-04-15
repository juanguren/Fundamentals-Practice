
// Static methods that will serve as shorcuts for basic Model operations (CRUD)

import { IUser } from "./users.types";
import UserSchema from "./users.model";

export const findOrCreate = async (
    data: IUser,
    userCode: string
): Promise<IUser> => {
    try {
        const record = await UserSchema.findOne({ id: userCode });
        if (record) {
            return record;
        } else{
            return await UserSchema.create( data );
        }
    } catch (error) {
        return error;
    }
};

export const findByCode = async (
    userCode: string
): Promise<any> => {
    try {
        return await UserSchema.findOne({ code: userCode });
    } catch (error) {
        return error;
    }
};