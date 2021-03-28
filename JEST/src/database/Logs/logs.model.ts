
import { model } from "mongoose";
import { 
    ILog
} from "./logs.types";
import {
    LogSchema
} from "./logs.schema";

export const logModel = model<ILog>("Log", LogSchema);

export default model<ILog>("Log", LogSchema);