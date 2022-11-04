// 1、基础类型
let age: number = 18
console.log('age:', age)

let userName: string = 'zhang'
console.log('userName:', userName)

let isMan: boolean = true
console.log('isMan:', isMan)

let undef: undefined = undefined
console.log('undef:', undef)

let nul: null = null
console.log('nul:', undef)

// 2、数组类型
let nameList: string[] = ['zhang', 'li'] //推荐，写法简单
console.log('nameList:', nameList)

let scoreList: Array<number> = [1, 2, 3, 4, 5]
console.log('scoreList:', scoreList)

// 3、联合类型
let sex: string | number = '男'
console.log('sex:', sex)

sex = 1
console.log('sex:', sex)

let sexList: (string | number)[] = [1, '男', 0, '0']
console.log('sexList:', sexList)

// 4、类型别名(推荐大写字母开头)
type SexArray = (string | number)[]
let sexArr: SexArray = ['男', 1]
console.log('sexArr:', sexArr)

type Sex = string | number
let customSex: Sex = 1
console.log('customSex:', customSex)

customSex = '男'
console.log('customSex:', customSex)
