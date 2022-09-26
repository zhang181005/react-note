import React, { Component } from 'react'

export default class Rose extends Component {
  render() {
    return (
      <div>
        <h3>我是Rose组件</h3>
        <div>Jack说: {this.props.msg}</div>
      </div>
    )
  }
}
