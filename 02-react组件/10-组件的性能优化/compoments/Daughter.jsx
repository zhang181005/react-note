import React, { PureComponent } from 'react'

export default class Daughter extends PureComponent {
  state = {
    list: ['明星1', '明星2', '明星3', '明星4'],
    index: 0,
  }
  render() {
    console.log('Daughter组件的render方法')
    return (
      <div>
        <h3>我是Daughter组件</h3>
        <div>Father组件点击次数: {this.props.likeDaughter}</div>
        <div>我认识明星是: {this.state.list[this.state.index]}</div>
        <button onClick={this.handleNext}>下一个</button>
      </div>
    )
  }

  handleNext = () => {
    this.setState({
      index: parseInt(Math.random() * this.state.list.length),
    })
  }
}
