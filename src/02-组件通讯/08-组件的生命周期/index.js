import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import Children from './compoments/Children'

class App extends Component {
  //1、最先触发，提供数据
  //2、提供ref
  //3、绑定this指向
  constructor() {
    super()
    console.log('constructor()')
    //1 等价于 state={}
    this.state = { count: 0 }
    //2
    this.inputRef = React.createRef()

    //3
    this.handleChange = this.handleChange.bind(this)
  }

  //渲染组件的结构，禁止在render中调用setState()
  render = () => {
    console.log('render()')
    return (
      <div>
        <h1> 我是根组件 </h1>
        <h3>点击次数：{this.state.count}</h3>
        <button onClick={this.handleChange}>修改</button>
        <hr />
        {this.state.count < 6 && <Children count={this.state.count}></Children>}
      </div>
    )
  }

  //创建时触发
  componentDidMount() {
    console.log('componentDidMount()')
  }

  //状态被修改时触发，禁止条用setState()
  componentDidUpdate() {
    console.log('componentDidUpdate()')
  }

  //被销毁之前会触发
  componentWillUnmount() {
    console.log('componentWillUnmount()')
  }

  handleChange() {
    this.setState({
      count: this.state.count + 1,
    })
    //强制更新
    // this.forceUpdate()
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
