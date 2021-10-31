
import Customer from "./classes/users/Customer";
import Pizza from "./classes/pizzas/Pizza";
import NeapolitanPizza from "./classes/pizzas/NeapolitanPizza";
import PizzaMachine from "./classes/PizzaMachine";
import OrderFactory from "./classes/OrderFactory";
import Coin from "./classes/Coin";
import Manager from "./classes/users/Manager";
import CaliforniaPizza from "./classes/pizzas/CaliforniaPizza";
import GreekPizza from "./classes/pizzas/GreekPizza";
import ChicagoPizza from "./classes/pizzas/ChicagoPizza";


function init() {
    
  //initialization
  const manager_A = new Manager("Mike", "Doe");
  
  const john_doe = new Customer("Oliver", "Smith");
  john_doe.add_money_item(new Coin(1),new Coin(1), new Coin(2),new Coin(2),new Coin(2), new Coin(0.5));

  const hanan_key = new Customer("Hanan", "Key");
  hanan_key.add_money_item(new Coin(1),new Coin(1), new Coin(2),new Coin(2),new Coin(2), new Coin(0.5));

  const pizza_machine = new PizzaMachine;

  pizza_machine.add_pizza_menu( 
    manager_A,   
    new NeapolitanPizza(NeapolitanPizza.MARINARA),
    new NeapolitanPizza(NeapolitanPizza.MARGHERITA),
    new NeapolitanPizza(NeapolitanPizza.MARGHERITAEXTRA),
    new CaliforniaPizza(CaliforniaPizza.CALIFORNIA),
    new GreekPizza(GreekPizza.GREEK),
    new ChicagoPizza(ChicagoPizza.CHICAGO)
    
    );
    

  //senario

  const selection1: Pizza = pizza_machine.select(
    NeapolitanPizza.MARINARA
    
  );  
  const order1 = OrderFactory.make(john_doe, selection1);

  pizza_machine.order(order1);
  pizza_machine.pay();

  const selection2: Pizza = pizza_machine.select(
    NeapolitanPizza.MARGHERITA
    
  );  
  const order2 = OrderFactory.make(hanan_key, selection2);

  pizza_machine.order(order2);
  pizza_machine.pay();

   
 
  



  

  
  
 

     
    

    


    
      
    
}
  init();