import ReactDOM from 'react-dom'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'Hello',
      count: 0,
    }
  }

  render() {
    return (
      <div>
        <h1>我是根组件</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
