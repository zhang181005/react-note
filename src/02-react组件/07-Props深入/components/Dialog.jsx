import React, { Component } from 'react'

export default class Dialog extends Component {
  render() {
    return (
      <div>
        <div className="title">{this.props.title}</div>

        <div className="content">{this.props.children}</div>

        <button>确认</button>
        <button>取消</button>
      </div>
    )
  }
}
