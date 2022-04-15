"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogSchema = void 0;
const mongoose_1 = require("mongoose");
const LogSchema = new mongoose_1.Schema({
    route: { type: String, required: true },
    date: { type: Date, required: true }
});
exports.LogSchema = LogSchema;
