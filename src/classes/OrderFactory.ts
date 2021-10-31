import User from "./users/User";
import Order from "./Order";
import Pizza from "./pizzas/Pizza";



export default abstract class OrderFactory {
  static make(
    user: User,
    pizza: Pizza,
    
  ): Order {
    return new Order(user, pizza);
  }
}
