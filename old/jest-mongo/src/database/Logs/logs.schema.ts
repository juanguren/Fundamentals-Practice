import { Schema } from "mongoose";

const LogSchema: Schema = new Schema({
  route: { type: String, required: true },
  date: { type: Date, required: true },
});

export { LogSchema };
