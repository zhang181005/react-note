import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/*
  ref的使用步骤
  1、通过React.createRef()常见一个ref
  2、将创建的ref对象添加到dom中，通过ref属性
  3、通过ref对象获取dom对象的值
*/
class App extends Component {
  txtRef = React.createRef()
  formRef = React.createRef()

  render() {
    return (
      <div>
        <h1>常见的受控组件</h1>
        <div>
          <h3>文本框</h3>
          姓名：
          <input type="text" ref={this.txtRef} />
          <FormValidate ref={this.formRef}></FormValidate>
          <button onClick={this.clickFn}>获取值</button>
        </div>
      </div>
    )
  }

  clickFn = () => {
    console.log(this.txtRef.current.value)
    this.formRef.current.validate()
  }
}

class FormValidate extends Component {
  render = () => {
    return <div>form检验组件</div>
  }

  validate = () => {
    console.log('属性校验！')
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
