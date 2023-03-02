import OrderStatusChangeEvent from "../events/OrderStatusChangeEvent";
import OrderCompleted from "../OrderCompleted";
import Order from "../entities/Order";


export default class PaymentService {
    processOrderStatusChange(event: OrderStatusChangeEvent) {
        if(event instanceof OrderCompleted) {
            this.processPayment(event.order);
        }
    }

    processPayment(order: Order) {
        order.customer.requestPayment(order.totalPrice).execute();
    }
}