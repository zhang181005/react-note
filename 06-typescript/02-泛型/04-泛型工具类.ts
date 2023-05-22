{
  type User = {
    name: string
    age: number
    gender: string
  }

  //1、Partial:接收一个类型，返回一个新类型，并且会让新类型中所有的属性变成可选的
  type PartialUser = Partial<User>
  const partialUser: PartialUser = {
    name: 'zhang',
  }

  //2、readonly: 接收一个类型，返回一个新类型，并且新类型中所有属性都是只读的
  type ReadonlyUser = Readonly<User>
  const readonlyUser: ReadonlyUser = {
    name: 'zhang',
    age: 18,
    gender: '男',
  }
  //无法修改属性的值
  //readonlyUser.name = ''
  //readonlyUser.age = 19

  //3、Pick:从一个已有类型中，选择一组属性来构成一个新的类型
  type PickUser = Pick<User, 'name' | 'age'>
  const pickUser: PickUser = {
    name: 'zhang',
    age: 18,
  }

  //3、Omit: 从一个已有类型中，排出一组属性，使用剩下的属性来构成一个新类型
  type OmitUser = Omit<User, 'name' | 'age'>
  const omitUser: OmitUser = {
    gender: '男',
  }
}
