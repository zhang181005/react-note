import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import Father from './compoments/Father'

/*
组件性能优化
1、减轻state，和渲染不想管的数据不要放在state里面
2、避免不必要的重新渲染
3、使用纯组件方式，但是纯组件比较使用的是浅层比较，
  对于基础类型没有问题，但是引用类型的话只比较了引用类型的地址是不是发生了变化，
  而不关注引用类型的内容变化
*/
class App extends Component {
  render = () => {
    return (
      <div>
        <h1>我是根组件</h1>

        <Father></Father>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
