//也可以为泛型指定范围
interface ILength {
  length: number
}

function fun<T extends ILength>(value: T): T {
  console.log(value.length)
  return value
}

fun('1')
fun(['', 1, 22])

//多个泛型类型
//keyof可以获取到一个类型或接口所有key的联合类型
function getProperty<T extends Object, key extends keyof T>(Obj: T, key: key) {
  return Obj[key]
}

getProperty({ name: 'zhang', age: 18 }, 'age')
getProperty({ a: 'a', b: 'b' }, 'a')
