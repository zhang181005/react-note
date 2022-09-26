import React, { Component } from 'react'
import { Consumer } from '../index'

export default class Sun extends Component {
  render() {
    return (
      <div>
        <h4>我是Sun组件</h4>
        <Consumer>{(item) => <div>根组件的秘密: {item.secret}</div>}</Consumer>
      </div>
    )
  }
}
