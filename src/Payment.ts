import PaymentStrategy from "./PaymentStrategy";

export default class Payment {
  strategy: PaymentStrategy;
  price: number;

  constructor(strategy: PaymentStrategy, price: number) {
    this.strategy = strategy;
    this.price = price;
  }

  execute() {
    this.strategy.execute(this.price);
  }
}