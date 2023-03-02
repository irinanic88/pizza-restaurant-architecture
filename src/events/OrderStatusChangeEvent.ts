import Order from "../entities/Order";

export default class OrderStatusChangeEvent {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }
}