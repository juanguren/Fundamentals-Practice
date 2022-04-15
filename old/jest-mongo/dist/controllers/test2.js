"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleStuff = void 0;
const simpleStuff = (req, res) => {
    const { param } = req.query;
    if (param) {
        res.json({ param });
    }
    else {
        res.json({ message: 'Param non-existant' });
    }
};
exports.simpleStuff = simpleStuff;
