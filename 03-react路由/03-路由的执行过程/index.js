import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home'
import My from './pages/My'
import Setting from './pages/Setting'
import NotFound from './pages/NotFound'
/**
 * 1、通过点击Link组件，修改了浏览器地址栏中的url
 * 2、React路由监听了url的变换（HashRouter：hashChange事件，BrowserRouter：popState事件）
 * 3、React路由会遍历所有的路由规则，使用路由规则中的path与url中的pathname(hash)进行匹配
 * 4、当路由规则中的path能匹配上地址栏中的pathname(hash)是，展示Route组件的内容
 */

//1、导入核心组件
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from 'react-router-dom'

class App extends Component {
  render = () => {
    return (
      //2、包裹应用
      <Router>
        <div>
          <h1>路由的使用过程</h1>
          {/* 3、通过Link(NavLink：高亮)组件提供导航链接 */}
          <ul>
            <li>
              <NavLink to="/home">首页</NavLink>
            </li>
            <li>
              <NavLink to="/my">我的</NavLink>
            </li>
            <li>
              <Link to="/setting">设置</Link>
            </li>
          </ul>
        </div>

        {/* 4、通过Route配置路由规则 */}
        {/* 
          Route组件的注意事项：
          1、如果path指定为 / ，所有以 / 开头的组件都能匹配
          2、Route添加react属性，代表需要精确匹配
          3、如果不写path属性，能够匹配所有组件
        */}
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/my" element={<My></My>}></Route>
          <Route path="/setting" element={<Setting></Setting>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
