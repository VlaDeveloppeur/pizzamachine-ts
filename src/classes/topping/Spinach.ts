import Topping from "./Topping";


export default class Spinach extends Topping {
  constructor(quantity: number = 0) {
    super("spinach", quantity);
  }
}
