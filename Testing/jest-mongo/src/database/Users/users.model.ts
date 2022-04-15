
import { model } from "mongoose";
import { 
    IUser
} from "./users.types";
import {
    UserSchema,
    LogSchema
} from "./users.schema";

export default model<IUser>("User", UserSchema);
