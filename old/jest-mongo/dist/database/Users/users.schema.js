"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogSchema = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
//https://medium.com/swlh/using-typescript-with-mongodb-393caf7adfef
const UserSchema = new mongoose_1.Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: String, required: true },
    income: { type: Number, required: true },
    admin: { type: Boolean, required: true },
    professionType: {
        type: String,
        enum: ['STUDENT', 'PROFESSIONAL', 'RETIRED'],
        required: true,
        default: 'STUDENT'
    }
});
exports.UserSchema = UserSchema;
const LogSchema = new mongoose_1.Schema({
    route: { type: String, required: true },
    date: { type: Date, required: true }
});
exports.LogSchema = LogSchema;
