import Resource from "./Topping";

export default class TomateSauce extends Resource {
  constructor(quantity: number = 0) {
    super("tomatosauce", quantity);
  }
}
