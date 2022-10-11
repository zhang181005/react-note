import React, { Component } from 'react'

export default class Son extends Component {
  state = {
    list: ['明星1', '明星2', '明星3', '明星4'],
    index: 0,
  }
  render() {
    console.log('Son组件的Render方法')
    return (
      <div>
        <h3>我是Son组件</h3>
        <div>Father组件点击次数: {this.props.likeSon}</div>
        <div>我认识明星是: {this.state.list[this.state.index]}</div>
        <button onClick={this.handleNext}>下一个</button>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (this.props.likeSon === nextProps.likeSon) {
    //   return false
    // }
    if (this.state.index === nextState.index) {
      return false
    }

    return true
  }

  handleNext = () => {
    this.setState({
      index: parseInt(Math.random() * this.state.list.length),
    })
  }
}
