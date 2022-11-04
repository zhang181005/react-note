{
  //声明变量并赋值的时候会发生类型推论，即可以省略类型，ts自动帮你绑定类型
  let num = 11 //等价于 let num: number = 11

  //此时再给num复制其他类型的数据则会报错
  // num='11'

  //决定函数返回值时也会发生类型推论,返回值类型可以省略
  const add = (n1: number, n2: number) => {
    return n1 + n2
  }

  //此时的result会根据函数返回值自动绑定类型
  let result = add(1, 2)
  console.log(result)
}
