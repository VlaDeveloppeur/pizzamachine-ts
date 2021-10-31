import Chicken from "./Chicken";
import Potato from "./Potato";
import Garlic from "./Garlic";
import CreamFresh from "./CreamFresh";
import TomateSauce from "./TomateSauce";
import Spinach from "./Spinach";

export default abstract class ToppingsFactory {
  static readonly CHICKEN: string = "chiken";
  static readonly POTATO: string = "potato";
  static readonly GARLIC: string = "garlic";
  static readonly CREAMFRESH: string = "chreamfresh";
  static readonly TOMATOSAUCE: string = "tomatosauce";
  static readonly SPINACH: string = "spinach";

  static readonly KINDS: Array<string> = [
    ToppingsFactory.CHICKEN,
    ToppingsFactory.POTATO,
    ToppingsFactory.GARLIC,
    ToppingsFactory.CREAMFRESH,
    ToppingsFactory.TOMATOSAUCE,
    ToppingsFactory.SPINACH,
  ];

  static make(name: string, quantity: number = 10) {
    if (ToppingsFactory.KINDS.indexOf(name) === -1) {
      throw new Error(
        `name argument must be defined and be one of this kind ${ToppingsFactory.KINDS.join(
          ","
        )}`
      );
    }

    switch (name.toLowerCase()) {
      case ToppingsFactory.CHICKEN:
        return new Chicken(quantity);
      case ToppingsFactory.POTATO:
        return new Potato(quantity);
      case ToppingsFactory.GARLIC:
        return new Garlic(quantity);
      case ToppingsFactory.CREAMFRESH:
        return new CreamFresh(quantity);
      case ToppingsFactory.TOMATOSAUCE:
        return new TomateSauce(quantity);
      case ToppingsFactory.SPINACH:
        return new Spinach(quantity);
      default:
        throw new Error(
          `authorized topping names are ${ToppingsFactory.KINDS.join(
            ", "
          )}, ${name} given`
        );
    }
  }
}
