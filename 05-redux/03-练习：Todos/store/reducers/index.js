import todoList from './todoList'
import filter from './filter'
import {combineReducers} from 'redux'

export default combineReducers({
    todoList,
    filter,
})
