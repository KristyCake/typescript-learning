function printId(id: number | string) {
  if (typeof id === "number") {
    return `ID Number: ${id}`
  } return `ID String: ${id}`
}

console.log(printId(101))
console.log(printId("abc"))

// function moveEnumHa(dir: Direction) {
//   if (dir === 0) {
//     console.log("Moving Up")
//   } else if (dir === 1) {
//     console.log("Moving Down")
//   } else if (dir === 2) {
//     console.log("Moving Left")
//   } else {
//     console.log("Moving Right")
//   }
// }

// moveEnumHa(Direction.Down)