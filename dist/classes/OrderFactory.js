"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(require("./Order"));
class OrderFactory {
    static make(user, pizza) {
        return new Order_1.default(user, pizza);
    }
}
exports.default = OrderFactory;
//# sourceMappingURL=OrderFactory.js.map