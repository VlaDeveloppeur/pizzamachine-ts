import Order from "./Order";
import Pizza from "./Pizza";


export default class PizzaMachine {
    private _orders: Array<Order> = []
    private _current_order: Order = null;
    private _pizza: Array<Pizza> = [];


    order(order: Order) {
        this._current_order = order;
        this._orders.push(order);
    }

    
}