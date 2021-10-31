import Chicken from "./Chicken";
import Potato from "./Potato";
import Garlic from "./Garlic";
import CreamFresh from "./CreamFresh";
import TomateSauce from "./TomateSauce";
import Spinach from "./Spinach";

export default abstract class ResourceFactory {
  static readonly CHICKEN: string = "poulet";
  static readonly POTATO: string = "pomme de terre";
  static readonly GARLIC: string = "ail";
  static readonly CREAMFRESH: string = "crème fraîche";
  static readonly TOMATOSAUCE: string = "sauce tomate";
  static readonly SPINACH: string = "épinard";

  static readonly KINDS: Array<string> = [
    ResourceFactory.CHICKEN,
    ResourceFactory.POTATO,
    ResourceFactory.GARLIC,
    ResourceFactory.CREAMFRESH,
    ResourceFactory.TOMATOSAUCE,
    ResourceFactory.SPINACH,
  ];

  static make(name: string, quantity: number = 10) {
    if (ResourceFactory.KINDS.indexOf(name) === -1) {
      throw new Error(
        `name argument must be defined and be one of this kind ${ResourceFactory.KINDS.join(
          ","
        )}`
      );
    }

    switch (name.toLowerCase()) {
      case ResourceFactory.CHICKEN:
        return new Chicken(quantity);
      case ResourceFactory.POTATO:
        return new Potato(quantity);
      case ResourceFactory.GARLIC:
        return new Garlic(quantity);
      case ResourceFactory.CREAMFRESH:
        return new CreamFresh(quantity);
      case ResourceFactory.TOMATOSAUCE:
        return new TomateSauce(quantity);
      case ResourceFactory.SPINACH:
        return new Spinach(quantity);
      default:
        throw new Error(
          `authorized resource names are ${ResourceFactory.KINDS.join(
            ", "
          )}, ${name} given`
        );
    }
  }
}
