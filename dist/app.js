"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(require("./classes/users/Customer"));
const NeapolitanPizza_1 = __importDefault(require("./classes/pizzas/NeapolitanPizza"));
const PizzaMachine_1 = __importDefault(require("./classes/PizzaMachine"));
const OrderFactory_1 = __importDefault(require("./classes/OrderFactory"));
const Coin_1 = __importDefault(require("./classes/Coin"));
const Manager_1 = __importDefault(require("./classes/users/Manager"));
const CaliforniaPizza_1 = __importDefault(require("./classes/pizzas/CaliforniaPizza"));
const GreekPizza_1 = __importDefault(require("./classes/pizzas/GreekPizza"));
const ChicagoPizza_1 = __importDefault(require("./classes/pizzas/ChicagoPizza"));
function init() {
    //initialization
    const manager_A = new Manager_1.default("Mike", "Doe");
    const john_doe = new Customer_1.default("Oliver", "Smith");
    john_doe.add_money_item(new Coin_1.default(1), new Coin_1.default(1), new Coin_1.default(2), new Coin_1.default(2), new Coin_1.default(2), new Coin_1.default(0.5));
    const hanan_key = new Customer_1.default("Hanan", "Key");
    hanan_key.add_money_item(new Coin_1.default(1), new Coin_1.default(1), new Coin_1.default(2), new Coin_1.default(2), new Coin_1.default(2), new Coin_1.default(0.5));
    const pizza_machine = new PizzaMachine_1.default;
    pizza_machine.add_pizza_menu(manager_A, new NeapolitanPizza_1.default(NeapolitanPizza_1.default.MARINARA), new NeapolitanPizza_1.default(NeapolitanPizza_1.default.MARGHERITA), new NeapolitanPizza_1.default(NeapolitanPizza_1.default.MARGHERITAEXTRA), new CaliforniaPizza_1.default(CaliforniaPizza_1.default.CALIFORNIA), new GreekPizza_1.default(GreekPizza_1.default.GREEK), new ChicagoPizza_1.default(ChicagoPizza_1.default.CHICAGO));
    //senario
    const selection1 = pizza_machine.select(NeapolitanPizza_1.default.MARINARA);
    const order1 = OrderFactory_1.default.make(john_doe, selection1);
    pizza_machine.order(order1);
    pizza_machine.pay();
    const selection2 = pizza_machine.select(NeapolitanPizza_1.default.MARGHERITA);
    const order2 = OrderFactory_1.default.make(hanan_key, selection2);
    pizza_machine.order(order2);
    pizza_machine.pay();
}
init();
//# sourceMappingURL=app.js.map