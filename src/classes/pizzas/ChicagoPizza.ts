

import Pizza from "./Pizza";

export default class ChicagoPizza extends Pizza {
  static readonly CHICAGO: string = "chicago";
 
 

  static readonly KINDS: Array<string> = [
    ChicagoPizza.CHICAGO
  ];

  constructor(name: string) {
    if (ChicagoPizza.KINDS.indexOf(name.toLowerCase()) === -1)
      throw new Error(
        `${name} is not one of the allowed values : ${ChicagoPizza.KINDS.join(", ")}`
      );
    let price: number = 1;

    if (
      name.toLowerCase() === ChicagoPizza.CHICAGO 
    ) {
      price = 11;
    }

   

    super(name, price);
  }
}


