import Customer from "../Customer";
import Order from "../entities/Order";
import OrderStatusObserver from "../OrderStatusObserver";
import OrderCreated from "../OrderCreated";

import { v4 as uuidv4 } from 'uuid';
import Pizza from "../entities/Pizza";

export default class OrderFacade {
  static placeOrder(customer: Customer, products: Array<Pizza>) {
    const order = new Order(uuidv4(), customer, products, OrderFacade.calculatePrice(products));


    const orderBroker = OrderStatusObserver.getInstance();
    const orderCreatedEvent = new OrderCreated(order);

    console.log(`Order ID:${order.id} is placed`);

    orderBroker.notify(orderCreatedEvent);
  }

  static calculatePrice(products: Array<Pizza>) {
    return Math.floor(Math.random() * 10 * products.length);
  }
}