import Pizza from "./Pizza";

export default class NeapolitanPizza extends Pizza {
  static readonly MARINARA: string = "marinara";
  static readonly MARGHERITA: string = "margherita";
  static readonly MARGHERITAEXTRA: string = "margheritaextra";
 

  static readonly KINDS: Array<string> = [
    NeapolitanPizza.MARINARA,
    NeapolitanPizza.MARGHERITA,
    NeapolitanPizza.MARGHERITAEXTRA,
  ];

  constructor(name: string) {
    if (NeapolitanPizza.KINDS.indexOf(name.toLowerCase()) === -1)
      throw new Error(
        `${name} is not one of the allowed values : ${NeapolitanPizza.KINDS.join(", ")}`
      );
    let price: number = 1;

    if (
      name.toLowerCase() === NeapolitanPizza.MARINARA 
    ) {
      price = 8.5;
    }

    if (
      name.toLowerCase() === NeapolitanPizza.MARGHERITA 
    ) {
      price = 7.5;
    }

    if (
      name.toLowerCase() === NeapolitanPizza.MARGHERITA 
    ) {
      price = 8.5;
    }


    super(name, price);
  }
}
