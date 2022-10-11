import { useState, memo, useCallback } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(0)

  //当组件接收的内容有函数的时候，memo会失效，需要使用useCallback这个半数包裹起来
  const click = useCallback(() => {
    setCount(count + 1)
  }, [count])
  return (
    <div>
      <h1>我是根组件</h1>
      <h3>点击次数：{count}</h3>
      <h3>当前金额：{money}</h3>
      <button onClick={click}>点击</button>
      <button onClick={() => setMoney(money + 100)}>加钱</button>
      <hr />
      <Child1 count={count} click={click}></Child1>
      <hr />
      <Child2 money={money}></Child2>
    </div>
  )
}

const Child1 = memo(({ count, click }) => {
  console.log('Child1被执行')
  return (
    <div>
      我是Child1组件,App组件点击了{count}次<button onClick={click}>点击</button>
    </div>
  )
})

const Child2 = memo(({ money }) => {
  console.log('Child2被执行')
  return <div>我是Child2组件,App组件的金额是{money}元</div>
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
