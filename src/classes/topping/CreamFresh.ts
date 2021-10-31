import Topping from "./Topping";


export default class CreamFresh extends Topping {
  constructor(quantity: number = 0) {
    super("creamfresh", quantity);
  }
}
