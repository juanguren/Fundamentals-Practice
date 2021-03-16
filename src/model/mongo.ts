
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    id: string;
    name: string;
    age: string;
    income: number;
    admin: boolean;
    professionType: ProfessionEnum;
}

export enum ProfessionEnum{
    STUDENT = 'STUDENT',
    PROFESSIONAL = 'PROFESSIONAL',
    RETIRED = 'RETIRED'
}

const UserSchema : Schema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: {type: String, required: true },
    income: { type: Number, required: true },
    admin: { type: Boolean, required: true },
    professionType: 
    { 
        type: String,
        enum: [ 'STUDENT', 'PROFESSIONAL', 'RETIRED' ],
        required: true,
        default: 'STUDENT'
    }
});

export default mongoose.model<IUser>('User', UserSchema);