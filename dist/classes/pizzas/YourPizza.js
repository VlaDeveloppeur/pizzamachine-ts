"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class YourPizza {
    constructor(name, size, toppings) {
        this._name = name;
        if (size < 1 || size > 3)
            this._size = 1;
        else
            this._size = size;
        this._toppings = toppings;
    }
    addTopping(topName) {
        if (this.toppingCount < 5) //Max is 5 toppings
            this._toppings.push(topName);
    }
    get toppingCount() {
        return this._toppings.length;
    }
    get pizzaPrice() {
        //sm 10 , md= 13 , lrg=16
        //toppings 3 each
        let price = 0;
        switch (this._size) {
            case 1:
                price += 10 + (3 * this.toppingCount);
                break;
            case 2:
                price += 13 + (3 * this.toppingCount);
                break;
            case 3:
                price += 16 + (3 * this.toppingCount);
                break;
        }
        return price;
    }
}
exports.default = YourPizza;
//# sourceMappingURL=YourPizza.js.map