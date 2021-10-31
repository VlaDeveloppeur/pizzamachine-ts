"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("./Pizza"));
class ChicagoPizza extends Pizza_1.default {
    constructor(name) {
        if (ChicagoPizza.KINDS.indexOf(name.toLowerCase()) === -1)
            throw new Error(`${name} is not one of the allowed values : ${ChicagoPizza.KINDS.join(", ")}`);
        let price = 1;
        if (name.toLowerCase() === ChicagoPizza.CHICAGO) {
            price = 11;
        }
        super(name, price);
    }
}
exports.default = ChicagoPizza;
ChicagoPizza.CHICAGO = "chicago";
ChicagoPizza.KINDS = [
    ChicagoPizza.CHICAGO
];
//# sourceMappingURL=ChicagoPizza.js.map