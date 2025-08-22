function wrapInArray<T>(value: T): T[] {
  const arr: T[] = []
  arr.push(value)
  return arr
}

const a = wrapInArray("hello"); // a: string[]
const b = wrapInArray(42);      // b: number[]

console.log(a)
console.log(b)

function wrapInArrayPrince<T>(value: T): T[] {
  return [value];
}

const c = wrapInArrayPrince("hello");
const d = wrapInArrayPrince(4242);

console.log(c)
console.log(d)