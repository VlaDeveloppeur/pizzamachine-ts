"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    constructor(name, price) {
        if (name === undefined || name === "")
            throw new Error(`name must be defined and not empty`);
        if (price === undefined || price <= 0)
            throw new Error(`price must be defined and greater than 0`);
        this._name = name;
        this._price = price;
    }
    toString() {
        return `name : ${this._name}, price : ${this._price}`;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value === undefined)
            throw new Error(`value must be defined`);
        this._price = value;
    }
}
exports.default = Pizza;
//# sourceMappingURL=Pizza.js.map