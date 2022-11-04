//typeof能够快速根据一个值的到它的类型
const obj = {
  name: 'zhang',
  age: 18,
  gender: true,
  sayHi() {
    console.log('Hi')
  },
}

//使用typeof获取obj
type Obj = typeof obj

function get(stu: Obj) {
  console.log(stu.age)
  console.log(stu.gender)
  console.log(stu.gender)
}
