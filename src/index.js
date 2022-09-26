import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render = () => {
    return (
      <div>
        <h1>我是根组件</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
