
import { model } from "mongoose";
import { IUser } from "./users.types";
import UserSchema from "./users.schema";

export const UserModel = model<IUser>("User", UserSchema);
