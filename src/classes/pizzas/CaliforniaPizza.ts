import Pizza from "./Pizza";

export default class CaliforniaPizza extends Pizza {
  static readonly CALIFORNIA: string = "california";
 
 

  static readonly KINDS: Array<string> = [
    CaliforniaPizza.CALIFORNIA
  ];

  constructor(name: string) {
    if (CaliforniaPizza.KINDS.indexOf(name.toLowerCase()) === -1)
      throw new Error(
        `${name} is not one of the allowed values : ${CaliforniaPizza.KINDS.join(", ")}`
      );
    let price: number = 1;

    if (
      name.toLowerCase() === CaliforniaPizza.CALIFORNIA 
    ) {
      price = 10;
    }

   

    super(name, price);
  }
}
