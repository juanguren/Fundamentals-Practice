import { model } from "mongoose";
import { ILog } from "./logs.types";
import { LogSchema } from "./logs.schema";

export default model<ILog>("Log", LogSchema);
