import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    msg: 'hello',
  }

  render() {
    return (
      <div>
        <h1>受控组件</h1>
        {/* input值通过value属性控制 */}
        <input
          type="text"
          value={this.state.msg}
          onChange={this.handleChange}
        />
      </div>
    )
  }

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
