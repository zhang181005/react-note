import React, { Component } from 'react'
import PropType from 'prop-types'

export default class Main extends Component {
  static propTypes = {
    money: PropType.number.isRequired,
    list: PropType.array.isRequired,
    car: PropType.shape({
      brand: PropType.string.isRequired,
      price: PropType.number.isRequired,
    }),
  }

  static defaultProps = {
    money: 1,
  }

  render() {
    return (
      <div>
        money: {this.props.money + 100}
        <ul>
          {this.props.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        car: {this.props.car.brand} --- {this.props.car.price}
      </div>
    )
  }
}

//静态变量写法  等价于static修饰词
// Main.propTypes = {
//   money: PropType.number.isRequired,
//   list: PropType.array.isRequired,
//   car: PropType.shape({
//     brand: PropType.string.isRequired,
//     price: PropType.number.isRequired,
//   }),
// }

// Main.defaultProps = {
//   money: 1,
// }
