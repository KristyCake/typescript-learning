interface Order {
  readonly orderId: number,
  customer: string,
  items: string[]
};

const product: Order = {
  orderId: 1,
  customer: "Cake",
  items: ["Haha", "Sleepy"]
}

// product.orderId = 2;

console.log(product)