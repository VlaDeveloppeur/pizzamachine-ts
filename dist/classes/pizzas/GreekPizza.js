"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("./Pizza"));
class GreekPizza extends Pizza_1.default {
    constructor(name) {
        if (GreekPizza.KINDS.indexOf(name.toLowerCase()) === -1)
            throw new Error(`${name} is not one of the allowed values : ${GreekPizza.KINDS.join(", ")}`);
        let price = 1;
        if (name.toLowerCase() === GreekPizza.GREEK) {
            price = 11;
        }
        super(name, price);
    }
}
exports.default = GreekPizza;
GreekPizza.GREEK = "greek";
GreekPizza.KINDS = [
    GreekPizza.GREEK
];
//# sourceMappingURL=GreekPizza.js.map