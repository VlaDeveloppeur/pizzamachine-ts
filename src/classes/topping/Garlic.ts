import Resource from "./Resource";

export default class Garlic extends Resource {
  constructor(quantity: number = 0) {
    super("ail", quantity);
  }
}
