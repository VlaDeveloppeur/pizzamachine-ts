import User from "./users/User";
import Order from "./Order";
import Pizza from "./Pizza";

export default abstract class PizzaFactory {
    // static make(
    //   user: User,
    //   pizza: Pizza,
    // ): Order {
    //   return new Order(user, pizza);
    // }

    static QUATRE_SAISONS ={name:"QUATRE SAISONS", ingredients:['olives','fromage']} ;
    static QUATRE_FROMAGES ={name:"QUATRE SAISONS", ingredients:['fromage 1','fromage 2']} ;

    static RECIPES = [
      PizzaFactory.QUATRE_SAISONS,
      PizzaFactory.QUATRE_FROMAGES

    ];

    static make(recipe:string){

      switch(recipe){
        case PizzaFactory.QUATRE_SAISONS.name:
          return new Pizza('Quatre Saisons',10, PizzaFactory.QUATRE_SAISONS.ingredients);
          break;

          case PizzaFactory.QUATRE_FROMAGES.name:
            return new Pizza('Quatre Saisons',10, PizzaFactory.QUATRE_FROMAGES.ingredients);
            break;
      }


    }
  }