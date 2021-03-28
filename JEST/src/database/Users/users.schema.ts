
import { Schema } from "mongoose";
import { 
    findOrCreate,
    findByCode
 } from "../Users/users.statics";

//https://medium.com/swlh/using-typescript-with-mongodb-393caf7adfef

const UserSchema : Schema = new Schema({
    code: { type: String, required: true, unique: true },
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

export default UserSchema;