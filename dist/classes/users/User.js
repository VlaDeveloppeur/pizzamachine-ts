"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = __importDefault(require("../People"));
class User extends People_1.default {
    constructor(firstname, lastname, money_items = []) {
        super(firstname, lastname, 0);
        this._money_items = money_items;
    }
    get money_items() {
        return this._money_items;
    }
    add_money_item(...money) {
        if (money === undefined)
            throw new Error(`money argument must be defined`);
        for (const m of money) {
            this._money_items.push(m);
        }
        console.log(`User : budget is ${this.budget}€`);
    }
    remove_money_item(money) {
        if (money === undefined)
            throw new Error(`money argument must be defined`);
        this._money_items = this._money_items.filter((item) => item.value === money.value);
    }
    get budget() {
        let sum = 0;
        if (this._money_items.length > 0) {
            for (const a_money_item of this._money_items) {
                sum += a_money_item.value;
            }
        }
        return sum;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map