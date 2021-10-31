"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("./Resource"));
class TomateSauce extends Resource_1.default {
    constructor(quantity = 0) {
        super("sauce tomate", quantity);
    }
}
exports.default = TomateSauce;
//# sourceMappingURL=TomateSauce.js.map