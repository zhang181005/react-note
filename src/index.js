import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

class App extends Component {
  inputRef = React.createRef()
  render = () => {
    return (
      <div>
        <h1>我是根组件</h1>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
