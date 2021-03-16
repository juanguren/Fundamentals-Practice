"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test2_1 = require("../controllers/test2");
test('Test simple return endpoint', () => {
    expect(typeof test2_1.simpleStuff).toBe('function');
});
