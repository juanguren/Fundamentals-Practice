
import { model } from "mongoose";
import { IUser } from "./users.types";
import UserSchema from "./users.schema";

export default model<IUser>("User", UserSchema);
