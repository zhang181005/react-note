interface MyArray<T> {
  length: number
  push(n: T): void
  pop(): T
  reverse(): T[]
}

const arr: MyArray<string> = {
  length: 1,
  push(n) {},
  pop() {
    return ''
  },
  reverse() {
    return ['1', '2']
  },
}

arr.push('2')
