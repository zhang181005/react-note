import { Component } from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'

class App extends Component {
  state = {
    wifeName: '',
    myName: '',
  }
  render = () => {
    return (
      <div>
        <h1>我是App组件</h1>
        <div>我叫：{this.state.myName}</div>
        <div>
          配偶：{' '}
          <input
            type="text"
            name="wifeName"
            value={this.state.wifeName}
            placeholder="请输入配偶的名称"
            onChange={this.handleChange}
          />
        </div>
        <hr />

        <Child
          momName={this.state.wifeName}
          changeDadName={this.changeMyname}
        ></Child>
      </div>
    )
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  changeMyname = (myName) => {
    this.setState({
      myName: myName,
    })
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'))
