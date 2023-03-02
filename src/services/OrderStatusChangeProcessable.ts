export default interface OrderStatusChangeProcessable {
    processOrderStatusChange(OrderStatusChange): void;
}