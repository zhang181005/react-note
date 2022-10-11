import React, { Component } from 'react'

export default class Jack extends Component {
  render() {
    return (
      <div>
        <h3>我是Jack组件</h3>

        <button onClick={this.say}>i say</button>
      </div>
    )
  }

  say = () => {
    this.props.say('i love you, Rose')
  }
}
