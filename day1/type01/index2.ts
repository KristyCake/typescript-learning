let value: any = "Hello, World!";
let safeValue: unknown = "Hello, World!";

if (typeof safeValue === "string") {
  console.log(safeValue.toUpperCase());
}

console.log(value.toUpperCase());
// console.log(safeValue.toUpperCase());