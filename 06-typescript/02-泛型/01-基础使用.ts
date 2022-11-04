//泛型是可以在保证类型安全的前提下，让函数等与多种类型一起工作，从而实现复用
function fn<T>(param: T): T {
  return param
}

let res = fn<string>('1')

//由于类型推论，泛型可以省略不写
let res1 = fn(1)
