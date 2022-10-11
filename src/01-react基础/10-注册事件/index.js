import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    count: 0,
  }

  /*
  解决react类组件中注册事件的this问题
  1、把函数调用包裹在箭头函数中
    原写法：onClick = {this.clickFn}
    箭头函数：onClick = {() => this.clickFn()}
  2、使用bind修改this指向
    onClick = {this.clickFn.bind(this)}
  3、class新语法，类实例语法
    修改方法的写法,调用方式不变
    原写法： clickFn(){}
    修改后：clickFn = () => {}
  */
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.clickFn}>+1按钮</button>
      </div>
    )
  }

  clickFn = () => {
    // //组织默认事件，例如超链接跳转
    // e.preventDefault()
    // //阻止冒泡事件
    // e.stopPropagation()
    console.log('鼠标点击事件', this)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
