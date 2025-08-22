type Shape = "circle" | "square";

function area(shape: Shape): number {
  switch (shape) {
    case "circle": return 3.14;
    case "square": return 4;
    default:
      // compiler จะบังคับว่า default ต้องเป็น never → ป้องกัน type หาย
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}

console.log(area("circle"))
console.log(area("square"))
console.log(area("triangle"))