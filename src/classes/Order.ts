import Pizza from "./Pizza";

export default class Order {
  
private _pizzas: Array<Pizza>=[];

add_pizza(pizza:Pizza){
    this._pizzas.push(pizza)
}


}
