import Topping from "./Topping";

export default class Potato extends Topping{
  constructor(quantity: number = 0) {
    super("potato", quantity);
  }
}
