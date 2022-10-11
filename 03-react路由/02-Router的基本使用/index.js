import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import My from './pages/My'
import Setting from './pages/Setting'

//1、导入三个核心组件
//  Link：导航链接
//  Route：指定路由规则
//  HashRouter\BrowserRouter：整个路由组件，项目中想要使用react-router，
//    必须使用HashRouter包裹整个内容(HashRouter通过hash值实现，地址栏带#；
//     BrowserRouter使用浏览器的popstate实现，地址栏不带#)
class App extends Component {
  render = () => {
    return (
      <Router>
        <div>
          <h1>我是根组件</h1>
          <ul>
            <li>
              <Link to="/home">首页</Link>
            </li>
            <li>
              <Link to="/my">我的</Link>
            </li>
            <li>
              <Link to="/setting">设置</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/home" exact={false} element={<Home></Home>}></Route>
            <Route path="/my" element={<My></My>}></Route>
            <Route path="/setting" element={<Setting></Setting>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
