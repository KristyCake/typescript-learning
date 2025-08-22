function doubleNumber<T extends number>(value: T): T {
  return value * 2 as T
}

const a = doubleNumber(5);
// const b = doubleNumber("Hi")

console.log(a)