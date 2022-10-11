class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  eat() {
    console.log('Hi,我叫' + this.name + ', 我是' + this.type)
  }
}

class Dog extends Animal {
  constructor(name, type) {
    super(name, type)
    this.leg = 4
  }

  bark() {
    console.log(
      'hhahhhahhahhahhahhahhahhahhhahhhahhhahhhahhhahhhahhhahhhahhhahhhahhahhhahhhahhhahhha'
    )
  }
}

class Brid extends Animal {
  constructor(name, type) {
    super(name, type)
    this.leg = 2
  }

  fly() {
    console.log('i can fly')
  }
}

const dog = new Dog('毛毛', '金毛')
dog.eat()
dog.bark()

const brid = new Brid('小鸟', '金丝雀')
brid.eat()
brid.fly()
