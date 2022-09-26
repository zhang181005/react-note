import React, { Component } from 'react'

import Son from './Son'
import Daughter from './Daughter'

export default class Father extends Component {
  state = {
    likeSon: 0,
    likeDaughter: 0,
  }
  render() {
    console.log('Father组件的render方法')
    return (
      <div>
        <h2>我是Father组件</h2>
        <button onClick={this.likeSonClick}>喜欢Son</button>
        <button onClick={this.likeDaughterClick}>喜欢Daughter</button>
        <Son likeSon={this.state.likeSon}></Son>
        <Daughter likeDaughter={this.state.likeDaughter}></Daughter>
      </div>
    )
  }

  likeSonClick = () => {
    this.setState({ likeSon: this.state.likeSon + 1 })
  }

  likeDaughterClick = () => {
    this.setState({ likeDaughter: this.state.likeDaughter + 1 })
  }
}
