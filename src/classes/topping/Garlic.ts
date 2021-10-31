import Resource from "./Topping";

export default class Garlic extends Resource {
  constructor(quantity: number = 0) {
    super("garlic", quantity);
  }
}
