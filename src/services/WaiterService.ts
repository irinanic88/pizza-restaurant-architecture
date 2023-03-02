import OrderStatusChangeEvent from "../events/OrderStatusChangeEvent";
import Order from "../entities/Order";
import OrderReady from "../OrderReady";
import OrderStatusObserver from "../OrderStatusObserver";
import OrderCompleted from "../OrderCompleted";

export default class WaiterService {
    processOrderStatusChange(event: OrderStatusChangeEvent) {
        if(event instanceof OrderReady) {
            this.distributeOrder(event.order);

            const orderStatusObserver = OrderStatusObserver.getInstance();
            const completedOrder = new OrderCompleted(event.order);

            setTimeout(() => orderStatusObserver.notify(completedOrder), 3000);
        }
    }

    distributeOrder(order: Order) {
        console.log(`Serving order to ${order.customer.name}`);
    }
}