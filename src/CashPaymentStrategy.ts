import PaymentStrategy from "./PaymentStrategy";

export default class CashPaymentStrategy extends PaymentStrategy{
  startTransaction(price) {
    console.log(`Processing cash payment. Amount: ${price}`);
  }
  verifyTransaction() {
    console.log('Cash payment succeed');
  }
}