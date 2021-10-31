import Resource from "./Resource";

export default class TomateSauce extends Resource {
  constructor(quantity: number = 0) {
    super("sauce tomate", quantity);
  }
}
