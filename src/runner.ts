import Kitchen from "./services/Kitchen";
import OrderStatusObserver from "./OrderStatusObserver";
import Customer from "./Customer";
import Order from "./entities/Order";

import OrderCreated from "./OrderCreated";
import PizzaBuilder from "./entities/PizzaBuilder";
import OrderFacade from "./services/OrderFacade";
import PaymentService from "./services/PaymentService";
import WaiterService from "./services/WaiterService";

// terminal setup

const orderBroker = OrderStatusObserver.getInstance();

orderBroker.subscribe(new WaiterService());
orderBroker.subscribe(new Kitchen());
orderBroker.subscribe(new PaymentService());


// customer arrives at the restaurant

const Irina = new Customer('Irina', 25);


// waiter takes the order

const napolitanaBuilder = new PizzaBuilder();
const napolitana = napolitanaBuilder.addName('Napolitana').addToppings(['anchovies', 'mozzarella']).build();

const diavolaBuilder = new PizzaBuilder();
const diavola = diavolaBuilder.addName('Diavola').addBase('thick').addToppings(['pepperoni', 'mozzarella']).build();

const cuatroFormaggiBuilder = new PizzaBuilder();
const cuatroFormaggi = cuatroFormaggiBuilder.addName('Cuatro formaggi').addToppings(['gorgonzola', 'mozzarella']).addSauce('bianca').build();


// waiter places order

OrderFacade.placeOrder(Irina, [napolitana, diavola, cuatroFormaggi]);