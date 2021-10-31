import Topping from "./Topping";


export default class Garlic extends Topping {
  constructor(quantity: number = 0) {
    super("garlic", quantity);
  }
}
