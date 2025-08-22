function lastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1]
}

console.log(lastElement([10, 20, 30]))   // 30
console.log(lastElement<string>([]))   // undefined
