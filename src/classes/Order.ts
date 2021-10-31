import Pizza from "./pizzas/Pizza";
import PizzaFactory from "./pizzas/NeapolitanPizza";
import User from "./users/User";

export default class Order {
  
  private _user: User;
  private _pizza: Pizza;

  static CANCELED: number = -1;
  static DOING: number = 0;
  static DONE: number = 1;
  static STATUSES: Array<number> = [Order.CANCELED, Order.DOING, Order.DONE];

  private _status: number = Order.DOING;

    
  constructor(
      user: User,
      pizza_arg: Pizza,
    ){
      if (user === undefined) throw new Error(`user argument must be defined`);
      this._user = user;

      if (pizza_arg === undefined)
        throw new Error(`beverage argument must be defined`);
      this._pizza = pizza_arg;

      this._status = Order.DOING;
      console.log(`Order : doing (${this.toString()})`);
    }
    
    public toString(): string {
      return `name : ${this._pizza.name}, price : ${this._pizza.price}`;
    }


  public get user(): User {
    return this._user;
  }
  public get pizza(): Pizza {
    return this._pizza;
  }


 /**
  * 
  * Order status
  * 
  *  */ 
 public get status(): number {
    return this._status;
  }
  
  public cancel(): void {
    if (this._status === Order.DOING) {
      console.log(`Order : canceled`);
      this._status = Order.CANCELED;
    } else {
      if (this._status === Order.DONE)
        throw new Error(
          `Order can't be canceled as its status is already done`
        );
      else if (this._status === Order.CANCELED)
        throw new Error(
          `Order can't be canceled as its status is already canceled`
        );
      else
        throw new Error(
          `Order can't be canceled as its status has never been defined before`
        );
    }
  }
  
  public validate(): void {
    if (this._status === Order.DOING) {
      console.log(`Order : done`);
      this._status = Order.DONE;
    } else {
      if (this._status === Order.DONE)
        throw new Error(
          `Order can't be validated as its status is already done`
        );
      else if (this._status === Order.CANCELED)
        throw new Error(
          `Order can't be validated as its status is already canceled`
        );
      else
        throw new Error(
          `Order can't be validated as its status has never been defined before`
        );
    }
  }
      






}
