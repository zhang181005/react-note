import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import Father from './components/Father'

export const Context = React.createContext()
const { Provider } = Context

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <Provider value={{ count }}>
      <div>
        <h1>我是根组件</h1>
        <h2>点击次数：{count}</h2>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          点击
        </button>
        <hr />
        <Father></Father>
      </div>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
