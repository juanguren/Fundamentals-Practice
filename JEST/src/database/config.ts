
import Mongoose, { Schema, Document, model } from 'mongoose';
import { IUser } from './Users/users.types';
import UserSchema from "./Users/users.schema";

export const mongoConnection = () => {
    const URI = "mongodb://localhost:27017/ts_Jest";

    Mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    // Helpers
    const database = Mongoose.connection;
    database.once("open", async () => {
        console.log("Connected to database");
    });
    database.on("error", () => {
        console.log("Error connecting to database");
    });
};

export default model<IUser>('User', UserSchema);