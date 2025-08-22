enum Direction {
  Up,
  Down,
  Left,
  Right
}

function moveEnum(dir: Direction) {
  if (dir === 0) {
    console.log("Moving Up")
  } else if (dir === 1) {
    console.log("Moving Down")
  } else if (dir === 2) {
    console.log("Moving Left")
  } else {
    console.log("Moving Right")
  }
}

moveEnum(Direction.Up)
moveEnum(Direction.Down)
moveEnum(Direction.Left)
moveEnum(Direction.Right)


enum DirectionPrince {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

function moveEnumPrince(dirPrince: DirectionPrince) {
  console.log(`Moving ${dirPrince}`)
}

moveEnumPrince(DirectionPrince.Up)

type DirectionLiteral = "Up" | "Down" | "Left" | "Right"

function moveLiteral(dir: DirectionLiteral) {
  console.log(`Moving ${dir}`)
}

moveLiteral("Left")