"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Resource {
    constructor(name, quantity = 0) {
        if (name === undefined || name === "")
            throw new Error(`name must be defined and not empty`);
        this._quantity = quantity;
        this._name = name;
    }
    get quantity() {
        return this._quantity;
    }
    get name() {
        return this._name;
    }
}
exports.default = Resource;
//# sourceMappingURL=Resource.js.map