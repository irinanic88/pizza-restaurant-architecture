import {v4 as uuidv4} from 'uuid';
import Payment from "./Payment";
import CashPaymentStrategy from "./CashPaymentStrategy";
import CardPaymentStrategy from "./CardPaymentStrategy";
export default class Customer {
  id: string;
  name: string;
  cashAmount: number;

  constructor(name: string, cashAmount: number) {
    this.id = uuidv4();
    this.name = name;
    this.cashAmount = cashAmount
  }

  requestPayment(price: number) {
    const paymentStrategy = this.cashAmount > price ? new CashPaymentStrategy() : new CardPaymentStrategy();

    return new Payment(paymentStrategy, price);
  }
}