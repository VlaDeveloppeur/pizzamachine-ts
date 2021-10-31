import Resource from "./Topping";

export default class Chicken extends Resource {
  constructor(quantity: number = 0) {
    super("chicken", quantity);
  }
}
