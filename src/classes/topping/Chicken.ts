import Resource from "./Resource";

export default class Chicken extends Resource {
  constructor(quantity: number = 0) {
    super("poulet", quantity);
  }
}
