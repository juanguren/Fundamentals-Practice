"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logs_schema_1 = require("./logs.schema");
exports.default = mongoose_1.model("Log", logs_schema_1.LogSchema);
