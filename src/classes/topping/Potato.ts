import Resource from "./Resource";

export default class Potato extends Resource {
  constructor(quantity: number = 0) {
    super("pomme de terre", quantity);
  }
}
