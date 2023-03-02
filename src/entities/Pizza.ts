export default class Pizza {
  id: string;
  name: string;
  base: string;
  toppings: Array<string>;
  sauce: string;

  constructor(id: string, name: string, base: string, toppings: Array<string>, sauce: string) {
    this.id = id;
    this.name = name;
    this.base = base;
    this.toppings = toppings;
    this.sauce = sauce;
  }
}