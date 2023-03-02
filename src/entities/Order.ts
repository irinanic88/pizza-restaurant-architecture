import Customer from "../Customer";
import Pizza from "./Pizza";

export default class Order {
    id: string;
    customer: Customer;
    products: Array<Pizza>;
    totalPrice: number;

    constructor(id: string, customer: Customer, products: Array<Pizza>, totalPrice: number) {
        this.id = id;
        this.customer = customer;
        this.products = products;
        this.totalPrice = totalPrice;
    }
}