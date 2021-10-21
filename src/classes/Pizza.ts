export default class Pizza{
  protected _name: string;
  protected _price: number;
  protected _ingredients:Array<string>;
    
    constructor(name:string, price: number, ingredients:Array<string>){
      this._name = name;
      this._price = price;
      this._ingredients = ingredients;
    }

    
}