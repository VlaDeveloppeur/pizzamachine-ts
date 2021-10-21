"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PizzaMachine {
    constructor() {
        this._orders = [];
        this._current_order = null;
        this._pizza = [];
    }
    order(order) {
        this._current_order = order;
        this._orders.push(order);
    }
}
exports.default = PizzaMachine;
//# sourceMappingURL=PizzaMachine.js.map