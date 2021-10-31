"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CB {
    constructor(value) {
        if (value === undefined || value <= 0)
            throw new Error(`value argument must be defined and greater than 0`);
        this._value = value;
    }
    get value() {
        return this._value;
    }
}
exports.default = CB;
//# sourceMappingURL=Money.js.map