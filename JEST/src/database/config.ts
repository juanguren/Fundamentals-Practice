
import Mongoose, { Schema, Document } from 'mongoose';
import { ProfessionEnum } from '../model/model-interfaces';

export interface IUser extends Document {
    id: string;
    name: string;
    age: string;
    income: number;
    admin: boolean;
    professionType: ProfessionEnum;
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

export default Mongoose.model<IUser>('User', UserSchema);