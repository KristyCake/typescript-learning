function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const n = firstElement([1, 2, 3]);     // n: number
const s = firstElement(["a", "b"]);    // s: string
