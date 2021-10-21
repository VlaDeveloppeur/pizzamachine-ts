import Customer from "./classes/users/Customer";
import Order from "./classes/Order";
import Pizza from "./classes/Pizza";


function init() {
    //initialization
  
    const john_doe = new Customer("John", "Doe");
    const order = new Order();

    order.add_pizza(
      new Pizza(Pizza.FROMAGE)
    );




    //scenarioo
      
    
}
  init();