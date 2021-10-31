import Resource from "./Topping";

export default class Spinach extends Resource {
  constructor(quantity: number = 0) {
    super("spinach", quantity);
  }
}
