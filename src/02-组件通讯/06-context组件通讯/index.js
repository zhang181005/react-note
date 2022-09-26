import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Father from './components/Father'
//1、创建context组件
//2、使用Provider包裹根组件，使Provider成为最父级组件
//3、导出Consumer
//4、在需要使用的组件中引入Consumer
const { Provider, Consumer } = React.createContext()
export { Consumer }

class App extends Component {
  state = {
    secret: '',
  }
  render = () => {
    return (
      <Provider value={this.state}>
        <div>
          <h1>我是根组件</h1>
          <button onClick={this.mySecret}>我有一个秘密</button>
          <hr />
          <Father></Father>
        </div>
      </Provider>
    )
  }

  mySecret = () => {
    this.setState({
      secret: '不告诉你们',
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
