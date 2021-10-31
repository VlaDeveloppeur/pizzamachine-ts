import Resource from "./Resource";

export default class CreamFresh extends Resource {
  constructor(quantity: number = 0) {
    super("crème fraîche", quantity);
  }
}
