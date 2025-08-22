type Rectangle = { width: number, height: number };
type Circle = { radius: number };

function calcArea(shape: Rectangle | Circle): number {
  if ("radius" in shape) {
    return Number((Math.PI * shape.radius * shape.radius).toFixed(2))
  } else {
    return shape.height * shape.width
  }
}

console.log(calcArea({ width: 10, height: 5 }))
console.log(calcArea({ radius: 2 }))