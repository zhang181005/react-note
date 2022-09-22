import { Component } from 'react'
import ReactDOM from 'react-dom'
import Demo from './Demo'
import Hello from './Hello'

class App extends Component {
  render = () => {
    return (
      <div>
        <h1>我是App组件</h1>
        <Demo
          name="zhang"
          money={100000}
          flag={true}
          fn={() => {
            console.log(111)
          }}
          list={[1, 2, 3]}
          user={{ name: 'zz', age: 29 }}
        ></Demo>
        <Hello money={100}></Hello>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'))
