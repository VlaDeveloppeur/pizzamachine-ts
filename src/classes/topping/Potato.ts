import Resource from "./Topping";

export default class Potato extends Resource {
  constructor(quantity: number = 0) {
    super("potato", quantity);
  }
}
