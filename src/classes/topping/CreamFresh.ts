import Resource from "./Topping";

export default class CreamFresh extends Resource {
  constructor(quantity: number = 0) {
    super("creamfresh", quantity);
  }
}
