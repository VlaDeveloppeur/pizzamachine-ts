"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("./Pizza"));
class NeapolitanPizza extends Pizza_1.default {
    constructor(name) {
        if (NeapolitanPizza.KINDS.indexOf(name.toLowerCase()) === -1)
            throw new Error(`${name} is not one of the allowed values : ${NeapolitanPizza.KINDS.join(", ")}`);
        let price = 1;
        if (name.toLowerCase() === NeapolitanPizza.MARINARA) {
            price = 8.5;
        }
        if (name.toLowerCase() === NeapolitanPizza.MARGHERITA) {
            price = 7.5;
        }
        if (name.toLowerCase() === NeapolitanPizza.MARGHERITA) {
            price = 8.5;
        }
        super(name, price);
    }
}
exports.default = NeapolitanPizza;
NeapolitanPizza.MARINARA = "marinara";
NeapolitanPizza.MARGHERITA = "margherita";
NeapolitanPizza.MARGHERITAEXTRA = "margheritaextra";
NeapolitanPizza.KINDS = [
    NeapolitanPizza.MARINARA,
    NeapolitanPizza.MARGHERITA,
    NeapolitanPizza.MARGHERITAEXTRA,
];
//# sourceMappingURL=NeapolitanPizza.js.map