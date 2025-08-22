type Product = {
  id: number,
  name: string,
  price: number,
  tags: string[],
  note?: string
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 25000, tags: ["tech", "office"] },
  { id: 2, name: "Book", price: 500, tags: ["education"], note: "discount" },
];