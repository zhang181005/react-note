import { useState, memo } from 'react'
import ReactDOM from 'react-dom/client'

//函数组件的React.memo()等价于类组件中的PureComponent
//会影响性能， 所有一定会执行的组件不要使用memo包裹
const App = () => {
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(0)
  return (
    <div>
      <h1>我是根组件</h1>
      <h3>点击次数：{count}</h3>
      <h3>当前金额：{money}</h3>
      <button onClick={() => setCount(count + 1)}>点击</button>
      <button onClick={() => setMoney(money + 100)}>加钱</button>
      <hr />
      <Child1 count={count}></Child1>
      <hr />
      <Child2 money={money}></Child2>
    </div>
  )
}

const Child1 = memo(({ count }) => {
  console.log('Child1被执行')
  return <div>我是Child1组件,App组件点击了{count}次</div>
})

const Child2 = memo(({ money }) => {
  console.log('Child2被执行')
  return <div>我是Child2组件,App组件的金额是{money}元</div>
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
