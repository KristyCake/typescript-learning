interface ShapeBonus {
  width: number,
  height: number
}

function calcArea(shape: ShapeBonus): number {
  return shape.width * shape.height
}

const rectangle: ShapeBonus = { width: 2, height: 5 }
const square: ShapeBonus = { width: 5, height: 5 }

interface Rectangle {
  width: number;
  height: number
}

interface Circle {
  radius: number;
}

// Geometry
type Geometry = Rectangle | Circle;


function calcGeoMetryArea(shape: Geometry): number {
  if ("radius" in shape) {
    return Number((Math.PI * shape.radius * shape.radius).toFixed(2))
  }
  return shape.height * shape.width
}

const rect: Rectangle = { width: 3, height: 5 }
const cir: Circle = { radius: 2 }

console.log(calcGeoMetryArea(rect))
console.log(calcGeoMetryArea(cir))