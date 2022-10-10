import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import Cat from './components/Cat'
import Position from './components/Position'
import Mouse from './components/Mouse'

class App extends Component {
  render = () => {
    return (
      <div>
        <h1>我是App组件</h1>
        <hr />
        <Mouse>{(state) => <Cat {...state}></Cat>}</Mouse>
        <hr />
        <Mouse>{(state) => <Position {...state}></Position>}</Mouse>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
