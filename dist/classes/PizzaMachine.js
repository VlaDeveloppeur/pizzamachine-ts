"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(require("./Order"));
class PizzaMachine {
    constructor() {
        this._pizzas = [];
        this._orders = [];
        this._coins = [];
        this._current_order = null;
    }
    add_coin(...coins) {
        if (coins === undefined) {
            throw new Error(`coin argument must be defined`);
        }
        for (const coin of coins) {
            this._coins.push(coin);
        }
    }
    add_pizza_menu(manager, ...pizzas) {
        if (pizzas === undefined) {
            throw new Error(`pizza argument must be defined and greater than 0`);
        }
        pizzas.forEach((pizza) => {
            this._pizzas.push(pizza);
        });
        console.log(`Pizza machine : Pizzas Mario has ${this.pizzas.length} pizza(s) in menu (added by manager ${manager.fullname})`);
    }
    select(name) {
        const selected_pizza = this._pizzas.find((pizza) => pizza.name === name.toLowerCase());
        if (!selected_pizza)
            throw new Error(`Pizza Machine : does not contain a pizza of this kind : ${name}`);
        console.log(`Pizza Machine : ${selected_pizza.name} selected (${selected_pizza.toString()})`);
        return selected_pizza;
    }
    order(order) {
        console.log(`Pizza Machine : ${order.pizza.name} ordered by ${order.user.fullname}`);
        if (this._current_order !== null &&
            this._current_order.status === Order_1.default.DOING) {
            this._current_order.cancel();
        }
        this._current_order = order;
        this._orders.push(order); //Pizza Machine keeps each order in memory
    }
    pay() {
        if (this._current_order === undefined || this._current_order === null) {
            throw new Error(`There is no order to pay`);
        }
        if (this._current_order.user.pay(this._current_order.pizza.price)) {
            this._current_order.validate();
            this._current_order = null;
            return true;
        }
        else {
            this._current_order.cancel();
            return false;
        }
    }
    get pizzas() {
        return this._pizzas;
    }
}
exports.default = PizzaMachine;
//# sourceMappingURL=PizzaMachine.js.map