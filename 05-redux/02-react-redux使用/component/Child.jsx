import { useDispatch, useSelector } from 'react-redux'
import { add, addAsync, minus } from '../store/action'

const Child = () => {
  const money = useSelector((state) => state.money)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>我是Child组件，根组件的金额是{money}</h3>
      <button onClick={() => dispatch(add(100))}>加钱</button>
      <button onClick={() => dispatch(minus(100))}>扣钱</button>
      <button onClick={() => dispatch(addAsync(1000))}>转账</button>
    </div>
  )
}

export default Child
