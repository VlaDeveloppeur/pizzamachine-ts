"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(require("./classes/users/Customer"));
const Order_1 = __importDefault(require("./classes/Order"));
const Pizza_1 = __importDefault(require("./classes/Pizza"));
function init() {
    //initialization
    const john_doe = new Customer_1.default("John", "Doe");
    const order = new Order_1.default();
    order.add_pizza(new Pizza_1.default(Pizza_1.default.FROMAGE));
}
init();
//# sourceMappingURL=app.js.map