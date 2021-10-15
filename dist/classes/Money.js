"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Money {
    constructor(value) {
        if (value === undefined || value <= 0)
            throw new Error(`value argument must be defined and greater than 0`);
        this._value = value;
    }
    get value() {
        return this._value;
    }
}
exports.default = Money;
//# sourceMappingURL=Money.js.map