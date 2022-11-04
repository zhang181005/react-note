//枚举类似于 `字面量类型+联合类型组合`，用于提供一组明确的可选值
// enum Direction {
//   up,
//   down,
//   left,
//   right,
// }

// enum Direction {
//   up = 3,
//   down,
//   left,
//   right,
// }

enum Direction {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right',
}

function changeDirction(direction: Direction) {
  console.log(direction)
}

changeDirction(Direction.down)
