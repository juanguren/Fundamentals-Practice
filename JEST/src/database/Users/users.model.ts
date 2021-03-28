
import { model } from "mongoose";
import { 
    IUser,
    ILog
} from "./users.types";
import {
    UserSchema,
    LogSchema
} from "./users.schema";

export const logModel = model<ILog>("Log", LogSchema);

export default model<IUser>("User", UserSchema);
