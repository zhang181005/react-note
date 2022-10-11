import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    count: 0,
    list: ['张飞', '刘备', '关羽'],
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.clickFn}>+1按钮</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={this.add}>增加数据</button>
        <button onClick={this.del}>删除数据</button>
      </div>
    )
  }

  clickFn = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  add = () => {
    this.setState({
      list: [...this.state.list, '赵六'],
    })
  }

  del = () => {
    this.setState({
      list: this.state.list,
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
