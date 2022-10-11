import { Component } from 'react'

export default class Child extends Component {
  state = {
    dadName: '',
  }
  render = () => {
    return (
      <div>
        <h3>我是子组件</h3>
        <div>我的妈妈是： {this.props.momName}</div>
        <div>
          我的爸爸是：
          <input
            type="text"
            placeholder="请输入父亲的名称"
            value={this.state.dadName}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }

  handleChange = (e) => {
    this.setState({ dadName: e.target.value })
    this.props.changeDadName(e.target.value)
  }
}
