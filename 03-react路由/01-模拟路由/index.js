import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home'
import My from './pages/My'
import Setting from './pages/Setting'

class App extends Component {
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      console.log('hash变了' + window.location.hash)
      this.setState({
        currentHash: window.location.hash.slice(1),
      })
    })
  }

  state = {
    currentHash: '',
  }
  render = () => {
    return (
      <div>
        <h1>我是根组件</h1>
        <ul>
          <li>
            <a href="#/Home">首页</a>
          </li>
          <li>
            <a href="#/My">我的</a>
          </li>
          <li>
            <a href="#/Setting">设置</a>
          </li>
        </ul>

        {this.state.currentHash === '/Home' && <Home></Home>}
        {this.state.currentHash === '/My' && <My></My>}
        {this.state.currentHash === '/Setting' && <Setting></Setting>}
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
