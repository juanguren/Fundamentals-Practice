"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.faultyUser = exports.mockResponseById = exports.mockResponse = exports.mockUser = void 0;
const fk = __importStar(require("faker"));
const fkAge = (fk.datatype.number().toString()).substring(0, 2);
exports.mockUser = {
    "code": fk.datatype.uuid(),
    "name": fk.name.findName(),
    "age": fkAge,
    "income": fk.datatype.number() * 10,
    "admin": false,
    "professionType": Number(fkAge) > 65 ? 'RETIRED' : 'PROFESSIONAL'
};
exports.mockResponse = [
    {
        "code": fk.datatype.uuid(),
        "name": fk.name.findName(),
        "age": fkAge,
        "income": fk.datatype.number() * 10,
        "admin": false,
        "professionType": Number(fkAge) > 65 ? 'RETIRED' : 'PROFESSIONAL'
    },
    {
        "code": fk.datatype.uuid(),
        "name": fk.name.findName(),
        "age": fkAge,
        "income": fk.datatype.number() * 10,
        "admin": false,
        "professionType": Number(fkAge) > 65 ? 'RETIRED' : 'PROFESSIONAL'
    }
];
exports.mockResponseById = {
    "professionType": "PROFESSIONAL",
    "_id": "6060fecd4d26aa40ec1df90d",
    "code": "KJ8",
    "name": "Juan",
    "age": "25",
    "income": 95300,
    "admin": true,
    "__v": 0
};
exports.faultyUser = {
    "code": fk.datatype.uuid(),
    "name": fk.name.findName(),
    "age": fkAge,
    "income": fk.datatype.number() * 10,
    "professionType": Number(fkAge) > 65 ? 'RETIRED' : 'PROFESSIONAL'
};
