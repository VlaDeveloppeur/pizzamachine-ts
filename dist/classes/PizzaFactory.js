"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("./Pizza"));
class PizzaFactory {
    static make(recipe) {
        switch (recipe) {
            case PizzaFactory.QUATRE_SAISONS.name:
                return new Pizza_1.default('Quatre Saisons', 10, PizzaFactory.QUATRE_SAISONS.ingredients);
                break;
        }
    }
}
exports.default = PizzaFactory;
// static make(
//   user: User,
//   pizza: Pizza,
// ): Order {
//   return new Order(user, pizza);
// }
PizzaFactory.QUATRE_SAISONS = { name: "QUATRE SAISONS", ingredients: ['olives', 'fromage'] };
PizzaFactory.RECIPES = [
    PizzaFactory.QUATRE_SAISONS
];
//# sourceMappingURL=PizzaFactory.js.map