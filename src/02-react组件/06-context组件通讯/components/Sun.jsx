import React, { Component } from 'react'
import { Consumer } from '../index'

export default class Sun extends Component {
  render() {
    return (
      <Consumer>
        {({ secret, changeSecret }) => (
          <div>
            <h4>我是Sun组件</h4>
            <div>根组件的秘密: {secret}</div>

            <button onClick={() => changeSecret('哈哈哈哈')}>探索秘密</button>
          </div>
        )}
      </Consumer>
    )
  }
}
