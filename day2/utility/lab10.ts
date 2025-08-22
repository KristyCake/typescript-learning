interface Product {
  id: number,
  name: string,
  price: number,
  stock: number
}

type ProductSummary = Pick<Product, "id" | "name">
let A: ProductSummary = { id: 3, name: "Cake" }
console.log(A)