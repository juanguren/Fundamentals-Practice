
import { Document, Model } from "mongoose";

export interface IUser extends Document {
    id: string;
    name: string;
    age: string;
    income: number;
    admin: boolean;
    professionType: ProfessionEnum;
}

export enum ProfessionEnum {
    STUDENT = 'STUDENT',
    PROFESSIONAL = 'PROFESSIONAL',
    RETIRED = 'RETIRED'
}

export interface IUserDocument extends Document {}
export interface IUserModel extends Model<IUserDocument> {}