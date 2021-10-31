"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(user, pizza_arg) {
        this._status = Order.DOING;
        if (user === undefined)
            throw new Error(`user argument must be defined`);
        this._user = user;
        if (pizza_arg === undefined)
            throw new Error(`beverage argument must be defined`);
        this._pizza = pizza_arg;
        this._status = Order.DOING;
        console.log(`Order : doing (${this.toString()})`);
    }
    toString() {
        return `name : ${this._pizza.name}, price : ${this._pizza.price}`;
    }
    get user() {
        return this._user;
    }
    get pizza() {
        return this._pizza;
    }
    /**
     *
     * Order status
     *
     *  */
    get status() {
        return this._status;
    }
    cancel() {
        if (this._status === Order.DOING) {
            console.log(`Order : canceled`);
            this._status = Order.CANCELED;
        }
        else {
            if (this._status === Order.DONE)
                throw new Error(`Order can't be canceled as its status is already done`);
            else if (this._status === Order.CANCELED)
                throw new Error(`Order can't be canceled as its status is already canceled`);
            else
                throw new Error(`Order can't be canceled as its status has never been defined before`);
        }
    }
    validate() {
        if (this._status === Order.DOING) {
            console.log(`Order : done`);
            this._status = Order.DONE;
        }
        else {
            if (this._status === Order.DONE)
                throw new Error(`Order can't be validated as its status is already done`);
            else if (this._status === Order.CANCELED)
                throw new Error(`Order can't be validated as its status is already canceled`);
            else
                throw new Error(`Order can't be validated as its status has never been defined before`);
        }
    }
}
exports.default = Order;
Order.CANCELED = -1;
Order.DOING = 0;
Order.DONE = 1;
Order.STATUSES = [Order.CANCELED, Order.DOING, Order.DONE];
//# sourceMappingURL=Order.js.map