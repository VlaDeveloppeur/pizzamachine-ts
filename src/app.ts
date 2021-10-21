import Customer from "./classes/users/Customer";
import Order from "./classes/Order";
import Pizza from "./classes/Pizza";
import PizzaMachine from "./classes/PizzaMachine";
import PizzaFactory from "./classes/PizzaFactory";


function init() {
    //initialization
  
    const john_doe = new Customer("John", "Doe");

    //const pizza_machine = new PizzaMachine;


    const pizza_quatre_saisons:Pizza = PizzaFactory.make(PizzaFactory.QUATRE_SAISONS.name);


    console.log(pizza_quatre_saisons);

    //scenarioo

    // const selection1: Pizza = pizza_machine.select(
    //   Pizza.FROMAGE
    // );

    // const commande1 = PizzaFactory.make(john_doe, selection1);
    // pizza_machine.order(commande1);
      
    
}
  init();