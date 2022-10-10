import { useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(100)

  return (
    <div>
      <h1>我是App组件</h1>
      <h4>点击次数：{count}</h4>
      <button onClick={() => setCount(count + 1)}>点击加1</button>
      <hr />
      <h4>点击次数：{money}</h4>
      <button onClick={() => setMoney(money + 100)}>点击加100</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
