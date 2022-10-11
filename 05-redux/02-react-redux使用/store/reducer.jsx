import { combineReducers } from 'redux'

const moneyReducer = (money = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return money + action.money
    case 'MINUS':
      return money - action.money
    default:
      return money
  }
}

const userRefucer = (user = { name: '张', age: 20 }) => {
  return user
}

const reducers = combineReducers({ money: moneyReducer, user: userRefucer })
export default reducers
