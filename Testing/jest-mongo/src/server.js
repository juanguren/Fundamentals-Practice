"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
const main_1 = __importDefault(require("./routes/main"));
const PORT = 5000 || 3000;
const app = express_1.default();
app.get('/', (req, res) => {
    const date = moment_1.default();
    res.json({ date });
});
app.use('/main', main_1.default);
app.listen(PORT, () => {
    console.log("Listening in port " + PORT);
});
