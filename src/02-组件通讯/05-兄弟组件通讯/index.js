import { Component } from 'react'
import ReactDOM from 'react-dom'

import Jack from './components/Jack'
import Rose from './components/Rose'
/*
  原理是状态提取到一个最近的公共父组件中 
 */
class App extends Component {
  state = {
    msg: '',
  }
  render = () => {
    return (
      <div>
        <h1>我是根组件</h1>

        <Jack say={this.say}></Jack>
        <Rose msg={this.state.msg}></Rose>
      </div>
    )
  }

  say = (msg) => {
    this.setState({
      msg,
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
