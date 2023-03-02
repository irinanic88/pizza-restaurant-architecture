import OrderStatusChangeEvent from "../events/OrderStatusChangeEvent";
import Pizza from "../entities/Pizza";
import OrderCreated from "../OrderCreated";
import OrderStatusObserver from "../OrderStatusObserver";
import OrderReady from "../OrderReady";

export default class Kitchen {
  processOrderStatusChange(event: OrderStatusChangeEvent) {
    if (event instanceof OrderCreated) {
      event.order.products.forEach(pizza => this.bakePizza(pizza));

      const orderStatusObserver = OrderStatusObserver.getInstance();
      const readyOrder = new OrderReady(event.order);

      setTimeout(() => orderStatusObserver.notify(readyOrder), 3000);
    }
  }

  bakePizza(pizza: Pizza) {
    console.log(`Baking pizza ${pizza.name}`);
  }
}