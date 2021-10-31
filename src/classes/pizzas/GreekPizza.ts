
import Pizza from "./Pizza";

export default class GreekPizza extends Pizza {
  static readonly GREEK: string = "greek";
 
 

  static readonly KINDS: Array<string> = [
    GreekPizza.GREEK
  ];

  constructor(name: string) {
    if (GreekPizza.KINDS.indexOf(name.toLowerCase()) === -1)
      throw new Error(
        `${name} is not one of the allowed values : ${GreekPizza.KINDS.join(", ")}`
      );
    let price: number = 1;

    if (
      name.toLowerCase() === GreekPizza.GREEK 
    ) {
      price = 11;
    }

   

    super(name, price);
  }
}


