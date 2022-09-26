import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Dialog from './components/Dialog'
import Main from './components/Main'

class App extends Component {
  render = () => {
    return (
      <div>
        <h1> Props的Children属性 </h1>
        <Header>首页</Header>
        <Header>登录</Header>

        <hr />

        <Dialog title={<h4>温馨提示</h4>}>
          <div>我是内容</div>
        </Dialog>

        <hr />
        <h1>Props校验与默认值</h1>
        <Main
          list={[1, 2, 3, 4, 5]}
          car={{ brand: '雷雷', price: 100000 }}
        ></Main>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
