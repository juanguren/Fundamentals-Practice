
import { Document, Model } from "mongoose";

export interface ILog extends Document {
    route: String;
    date: Date;
}

export interface IUser extends Document {
    code: string;
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