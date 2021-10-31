"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("./Pizza"));
class CaliforniaPizza extends Pizza_1.default {
    constructor(name) {
        if (CaliforniaPizza.KINDS.indexOf(name.toLowerCase()) === -1)
            throw new Error(`${name} is not one of the allowed values : ${CaliforniaPizza.KINDS.join(", ")}`);
        let price = 1;
        if (name.toLowerCase() === CaliforniaPizza.CALIFORNIA) {
            price = 10;
        }
        super(name, price);
    }
}
exports.default = CaliforniaPizza;
CaliforniaPizza.CALIFORNIA = "california";
CaliforniaPizza.KINDS = [
    CaliforniaPizza.CALIFORNIA
];
//# sourceMappingURL=CaliforniaPizza.js.map