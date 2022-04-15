"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
const main_1 = __importDefault(require("./routes/main"));
const config_1 = require("./database/config");
const PORT = 5000 || 3000;
const app = express_1.default();
app.use('/main', main_1.default);
app.get('/', (req, res) => {
    const date = moment_1.default();
    res.json({ date });
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Listening in port " + PORT);
}));
config_1.mongoConnection();
exports.default = app;
