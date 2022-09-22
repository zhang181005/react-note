import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    userName: '',
    remark: '',
    city: 3,
    eat: true,
  }

  render() {
    return (
      <div>
        <h1>常见的受控组件</h1>
        <div>
          <h3>文本框</h3>
          姓名：
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <h3>文本域</h3>
          备注:{' '}
          <textarea
            cols="30"
            rows="10"
            name="remark"
            value={this.state.remark}
            onChange={this.handleChange}
          ></textarea>
          <h3>下拉框</h3>
          选择城市：
          <select
            value={this.state.city}
            name="city"
            onChange={this.handleChange}
          >
            <option value="1">济南</option>
            <option value="2">北京</option>
            <option value="3">青岛</option>
            <option value="4">上海</option>
            <option value="5">宁波</option>
          </select>
          <h3>复选框</h3>
          <label>
            <input
              type="checkbox"
              name="eat"
              checked={this.state.eat}
              onChange={this.handleChange}
            />
            吃早饭了吗
          </label>
        </div>
      </div>
    )
  }

  handleChange = (e) => {
    const { name, type, checked, value } = e.target
    this.setState({
      // []是es6新写法，允许属性名用表达式的形式来写
      [name]: type === 'checkbox' ? checked : value,
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
