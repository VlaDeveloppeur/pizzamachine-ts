"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Money_1 = __importDefault(require("./Money"));
class Coin extends Money_1.default {
    constructor(value) {
        super(value);
        if (Coin.AUTHORIZED_VALUES.indexOf(value) === -1) {
            throw new Error(`Authorized values are : ${Coin.AUTHORIZED_VALUES.toString()}`);
        }
    }
}
exports.default = Coin;
Coin.AUTHORIZED_VALUES = [1, 2, 0.5];
//# sourceMappingURL=Coin.js.map