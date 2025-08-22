const orders = [
  { id: 1, customer: "Alice", items: 3, price: 1200, note: null },
  { id: 2, customer: "Bob", items: 1, price: 500 },
  { id: 3, customer: "Pin", items: 2, price: 850, note: "urgent" }
]

const ordersType: {
  id: number,
  customer: string,
  items: number,
  price: number,
  note?: null | string
}[] = [
    { id: 1, customer: "Alice", items: 3, price: 1200, note: null },
    { id: 2, customer: "Bob", items: 1, price: 500 },
    { id: 3, customer: "Pin", items: 2, price: 850, note: "urgent" }
  ]

console.log(ordersType)