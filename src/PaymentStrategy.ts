export default class PaymentStrategy {
  startTransaction(price: number) {}
  verifyTransaction() {}
  execute(price: number) {
    this.startTransaction(price);
    this.verifyTransaction();

    console.log('Payment completed');
  }
}