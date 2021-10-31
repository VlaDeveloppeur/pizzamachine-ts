import Resource from "./Resource";

export default class Spinach extends Resource {
  constructor(quantity: number = 0) {
    super("épinard", quantity);
  }
}
