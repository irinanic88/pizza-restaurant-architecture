import PaymentStrategy from "./PaymentStrategy";

export default class CardPaymentStrategy extends PaymentStrategy{
  startTransaction(price) {
    console.log(`Processing card payment. Amount: ${price}`);
  }
  verifyTransaction() {
    console.log('Card payment succeed');
  }
}