import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(100)

  //1、第二个参数为[]的时候，只有在第一次加载的时候执行一次
  useEffect(() => {
    console.log('使用[]的useEffect被执行了')
  }, [])

  //当有第二个参数的时候，只有数组内的值变化的时候才会执行
  useEffect(() => {
    console.log('使用[count]的useEffect被执行了')
  }, [count])

  useEffect(() => {
    console.log('使用[money]的useEffect被执行了')
  }, [money])

  //没有第二个参数的时候，每一次state的变化都会执行
  useEffect(() => {
    console.log('没有使用第二个参数的useEffect被执行了')

    //清理副作用，当前useEffect每次调用前都会触发(第一次除外)，组件卸载时会触发
    return () => {
      console.log('')
    }
  })

  return (
    <div>
      <h1>我是App组件</h1>
      <h4>点击次数：{count}</h4>
      <button onClick={() => setCount(count + 1)}>点击加1</button>
      {count < 5 ? <Child></Child> : ''}
      <hr />
      <h4>金钱：{money}</h4>
      <button onClick={() => setMoney(money + 100)}>点击加1</button>
    </div>
  )
}

function Child() {
  useEffect(() => {
    console.log('定时器启动')
    let timer = window.setInterval(() => {
      console.log('定时器运行中')
    }, 1000)

    //此处相当于componentWillUnmount，组件卸载时会调用
    return () => {
      console.log('定时器关闭')
      clearInterval(timer)
    }
  }, [])

  return <div>我是Child组件</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
