import { useSelector } from 'react-redux'
import Child from './Child'

const App = () => {
  const money = useSelector((state) => state.money)
  const user = useSelector((state) => state.user)
  return (
    <div>
      <h1>我是根组件</h1>
      <h3>金额：{money}</h3>
      <hr />
      <Child></Child>
      <hr />
      <hr />
      <hr />
      <h2>用户信息：</h2>
      姓名：{user.name} <br />
      年龄：{user.age}
    </div>
  )
}

export default App
