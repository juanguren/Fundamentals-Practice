
import { Document } from "mongoose";

export interface ILog extends Document {
    route: String;
    date: Date;
}