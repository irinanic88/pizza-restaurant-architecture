import OrderStatusChangeEvent from "./events/OrderStatusChangeEvent";
import OrderStatusChangeProcessable from "./services/OrderStatusChangeProcessable";

export default class OrderStatusObserver {
    private static instance: OrderStatusObserver;
    orderSubscribers: Array<OrderStatusChangeProcessable> = [];

    private constructor() {}

    public static getInstance(): OrderStatusObserver {
        if(!OrderStatusObserver.instance) {
            return OrderStatusObserver.instance = new OrderStatusObserver();
        }

        return OrderStatusObserver.instance;
    }

    subscribe(subscriber: OrderStatusChangeProcessable) {
        this.orderSubscribers.push(subscriber);
    }

    notify(event: OrderStatusChangeEvent) {
        this.orderSubscribers.forEach(subscriber => subscriber.processOrderStatusChange(event));
    }
}