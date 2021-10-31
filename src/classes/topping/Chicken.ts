import Topping from "./Topping";


export default class Chicken extends Topping {
  constructor(quantity: number = 0) {
    super("chicken", quantity);
  }
}
