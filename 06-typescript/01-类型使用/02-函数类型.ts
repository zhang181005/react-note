//function定义函数
function add(n1: number, n2: number): number {
  return n1 + n2
}
console.log(add(1, 2))

//函数表达式
const sub = (n1: number, n2: number): number => {
  return n1 - n2
}
console.log(sub(1, 2))

//同时指定参数和返回值，仅适用于函数表达式
type Fn = (n1: number, n2: number) => number
const mult: Fn = (n1, n2) => {
  return n1 * n2
}
console.log(mult(1, 2))

//void类型,没有返回值，使用void
function hello(name: string): void {
  console.log('Hello,', name)
}
hello('zhang')
//如果函数没有写返回值，那么默认返回void类型
const hi = (name: string) => {
  console.log('Hi,', name)
}
hi('li')

//使用?修饰可选参数，该参数在调用时可以选择性传入，且必须放在必填参数后面
const strSub = (begin?: number, end?: number): void => {}

//方法参数默认值，与可选参数冲突
const strSub2 = (begin: number = 0, end: number = 100): void => {}
