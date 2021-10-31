export default abstract class Pizza {

    protected _name: string;
    protected _price: number;
    protected _size:string ;
    protected _topping:string;

  
    constructor(name: string, price: number) {
      if (name === undefined || name === "")
        throw new Error(`name must be defined and not empty`);
      if (price === undefined || price <= 0)
        throw new Error(`price must be defined and greater than 0`);
  
      this._name = name;
      this._price = price;
  

    }
  
    toString() {
      return `name : ${this._name}, price : ${this._price}`;
    }
  
    get name(): string {
      return this._name;
    }
  
  
    get price(): number {
      return this._price;
    }
  
    set price(value: number) {
      if (value === undefined) throw new Error(`value must be defined`);
      this._price = value;
    }
  
  }
  