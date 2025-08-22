type OrderStatus = "pending" | "paid" | "shipped" | "cancelled"

enum PaymentMethod {
  CreditCard,
  Paypal,
  BankTransfer
}

function getOrderSummary(order: Order): string {
  let payment: string;

  switch (order.method) {
    case PaymentMethod.CreditCard:
      payment = "Credit Card"
      break
    case PaymentMethod.Paypal:
      payment = "Paypal"
      break
    case PaymentMethod.BankTransfer:
      payment = " Bank Transfer"
      break
  }
  return (`Order #${order.id} (${order.customer} -> ${order.status} amount: ${order.amount},
  paid with: ${order.method})`)
}

interface Order {
  id: number;
  customer: string;
  status: OrderStatus;
  method: PaymentMethod;
  amount: number;
}

const raw: Order = { id: 1, customer: "David", status: "paid", method: 0, amount: 999 }
const raw1: Order = { id: 2, customer: "Alice", status: "cancelled", method: 2, amount: 55555 }
const raw2: Order = { id: 3, customer: "John", status: "shipped", method: 1, amount: 100 }

console.log(getOrderSummary(raw))
console.log(getOrderSummary(raw1))
console.log(getOrderSummary(raw2))

const ordersPrince: Order[] = [
  { id: 1, customer: "David", status: "paid", method: 0, amount: 999 },
  { id: 2, customer: "Alice", status: "cancelled", method: 2, amount: 55555 },
  { id: 3, customer: "John", status: "shipped", method: 1, amount: 100 }
]


ordersPrince.forEach((o) => console.log(getOrderSummary(o)))

function plunk<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key])
}

console.log("Order IDs", plunk(ordersPrince, "id"));
console.log("Status", plunk(ordersPrince, "status"));

type OrderBasic = Pick<Order, "id" | "status">

const readOnlyOrder: Readonly<Order> = ordersPrince[0];
// readOnlyOrder.amount = 23;

const rawJSON = '{"id":4,"customer":"David","status":"paid","method":0,"amount":999}';

const parsed = JSON.parse(rawJSON) as Order
const parse: Order = JSON.parse(rawJSON) // แบบนี้ก็ได้ แต่มันจะผิดโจทย์ เพเราะโจทย์บอกว่าให้ใช้ as

console.log("JSON ->", parsed.customer)