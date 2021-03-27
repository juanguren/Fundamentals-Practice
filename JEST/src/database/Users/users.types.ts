
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

export interface IUserModel extends Model<IUser> {} // Represents a standard mongoose model