"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Customer extends User_1.default {
    pay(price) {
        if (price === undefined || price <= 0)
            throw new Error(`price argument must be defined and greater than 0`);
        if (this.budget >= price) {
            if (this.budget === price) {
                this._money_items = [];
                console.log(`Customer (${this._firstname} ${this._lastname}) : budget is 0€`);
                return true;
            }
            else {
                const index = this._money_items.findIndex((element) => element.value === price);
                if (index > -1) {
                    this._money_items.splice(index, 1);
                    console.log(`Customer : payment done`);
                    return true;
                }
                else {
                    console.error(`Customer (${this._firstname} ${this._lastname}) : can't pay: ${price}€`);
                    return false;
                }
            }
        }
        else {
            console.error(`Customer (${this._firstname} ${this._lastname}) : can't pay: ${price}€`);
            return false;
        }
    }
}
exports.default = Customer;
//# sourceMappingURL=Customer.js.map