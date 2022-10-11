import { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'

const App = () => {
  // const [money, setMoney] = useState(0)

  //action
  const add = () => {
    return { type: 'ADD' }
  }

  const minus = () => {
    return { type: 'MINUS' }
  }

  //renducer
  const renducer = (money = 0, action) => {
    switch (action.type) {
      case 'ADD':
        return money + 100
      case 'MINUS':
        return money - 100
      default:
        return money
    }
  }

  //store
  const store = createStore(renducer)

  const unSubscribe = store.subscribe(() => {
    document.querySelector('span').innerHTML = store.getState()
  })

  useEffect(() => {
    document.querySelector('span').innerHTML = store.getState()

    return () => {
      unSubscribe()
    }
  }, [])

  return (
    <div>
      <h1>我是根组件</h1>
      <h3>
        金额：<span></span>
      </h3>
      <button onClick={() => store.dispatch(add())}>加钱</button>
      <button onClick={() => store.dispatch(minus())}>扣钱</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
