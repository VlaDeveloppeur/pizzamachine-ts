"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(require("./classes/users/Customer"));
const PizzaFactory_1 = __importDefault(require("./classes/PizzaFactory"));
function init() {
    //initialization
    const john_doe = new Customer_1.default("John", "Doe");
    //const pizza_machine = new PizzaMachine;
    const pizza_quatre_saisons = PizzaFactory_1.default.make(PizzaFactory_1.default.QUATRE_SAISONS.name);
    console.log(pizza_quatre_saisons);
    //scenarioo
    // const selection1: Pizza = pizza_machine.select(
    //   Pizza.FROMAGE
    // );
    // const commande1 = PizzaFactory.make(john_doe, selection1);
    // pizza_machine.order(commande1);
}
init();
//# sourceMappingURL=app.js.map