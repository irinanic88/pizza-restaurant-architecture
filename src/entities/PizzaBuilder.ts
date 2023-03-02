import { v4 as uuidv4 } from 'uuid';
import Pizza from "./Pizza";
export default class PizzaBuilder {
  name: string = 'Focaccia';
  base: string = 'thin';
  toppings: Array<string> = [];
  sauce: string = 'tomato';

  addName(name: string) {
    this.name = name;

    return this;
  }

  addBase(base: string) {
    this.base = base;

    return this;
  }

  addToppings(toppings: Array<string>) {
    this.toppings = toppings;

    return this;
  }

  addSauce(sauce: string) {
    this.sauce = sauce;

    return this;
  }

  build() {
    return new Pizza(uuidv4(), this.name, this.base, this.toppings, this.sauce);
  }
}