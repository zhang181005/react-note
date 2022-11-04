//方式1
type Teac = {
  name: string
  age: number
  hobby: string[]
  sayHi?: () => void
  sleep: (timer: number) => number
}

const teacher: Teac = {
  name: 'zhang',
  age: 20,
  hobby: ['上课', '打小孩'],
  sleep: (timer) => {
    return timer
  },
}

//方式2
const Student: {
  name: string
  age: number
} = {
  name: 'zhang',
  age: 18,
}

//方式3
//使用接口可以定义一个对象
interface User {
  name: string
  age: number
  sex?: boolean
  sayHi(): void
  hello: (str: string) => void
}

//接口可以继承
interface Staff extends User {
  deptName: string
}

const user: User = {
  name: 'zhang',
  age: 18,
  sayHi() {
    console.log('Hi')
  },
  hello(str) {
    console.log(str, this.name)
  },
}

const staff: Staff = {
  name: 'zhang',
  age: 18,
  deptName: '管理员',
  sayHi() {
    console.log('Hi')
  },
  hello(str) {
    console.log(str, this.name)
  },
}
