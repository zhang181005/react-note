{
  //类型推断会推断为number类型
  let num = 12

  //类型推断会推断为hello类型, 并且str的value只能是hello，就被称为字面量类型
  const str = 'hello'

  //字面量类型常与联合类型一起使用
  type Direction = 'up' | 'down' | 'left' | 'right'

  function changeDirection(direction: Direction): void {
    console.log(direction)
  }

  //此时方法的参数只能在'up' | 'down' | 'left' | 'right'中选择
  changeDirection('down')

  interface User {
    name: string
    age: number
    gender: 'Man' | 'Woman'
  }

  const user: User = {
    name: 'zhang',
    age: 18,
    gender: 'Man', //只能在'Man' | 'Woman'中选择
  }
}
