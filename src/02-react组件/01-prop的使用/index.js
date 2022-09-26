import { Component } from 'react'
import ReactDOM from 'react-dom'
import Demo from './Demo'
import Hello from './Hello'

class App extends Component {
  render = () => {
    return (
      <div>
        <h1>我是App组件</h1>
        <Demo car="小雷" money={300} check={true}></Demo>
        <Hello car="大雷" money={3000} check={true}></Hello>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'))
