function mapIdentity<T>(items: T[]): T[] {
  return items
}

console.log(mapIdentity([1, 2, 3]))      // number[]
console.log(mapIdentity(["a", "b"]))        // string[]
