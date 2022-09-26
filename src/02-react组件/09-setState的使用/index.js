import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

class App extends Component {
  state = {
    isShowInput: false,
    count: 0,
    num: 0,
  }
  inputRef = React.createRef()
  render = () => {
    return (
      <div>
        <h1>我是根组件</h1>
        <h3>count: {this.state.count}</h3>
        <button onClick={this.addCount}>增加count</button>

        <hr />
        <h3>num: {this.state.num}</h3>
        <button onClick={this.addNum}>修改num</button>
        <hr />
        {this.state.isShowInput ? (
          <input ref={this.inputRef} type="text" placeholder="请输入评论内容" />
        ) : (
          <button onClick={this.sendComment}>发表评论</button>
        )}
      </div>
    )
  }
  addCount = () => {
    //1、setState()是异步的
    //2、多个setState()会自动进行合并，相同属性会覆盖
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })

    console.log(this.state.count)
  }

  addNum = () => {
    //参数中的state时上一次setState()执行以后的state
    this.setState((state) => {
      return { num: state.num + 1 }
    })

    this.setState((state) => {
      return { num: state.num + 1 }
    })

    this.setState(
      (state) => ({ num: state.num + 1 }),
      () => console.log(this.state.num)
    )
  }
  sendComment = () => {
    this.setState({ isShowInput: !this.state.isShowInput }, () =>
      this.inputRef.current.focus()
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
