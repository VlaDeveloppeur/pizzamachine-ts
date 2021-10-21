import Pizza from "./Pizza";
import User from "./users/User";

export default class Order {
  
    private _user: User;

    
    constructor(
        user: User,
        pizza: Pizza,
      ){};

        private _pizzas: Array<Pizza>=[];
        add_pizza(pizza:Pizza){
            this._pizzas.push(pizza)
        }






}
