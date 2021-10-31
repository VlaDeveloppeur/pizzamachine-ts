import Topping from "./Topping";


export default class TomateSauce extends Topping {
  constructor(quantity: number = 0) {
    super("tomatosauce", quantity);
  }
}
