import axios from 'axios'
import {list, add, del, update, clear, updateAllDone} from '../constants/todoList'

export const getList = (todoList) => {
    return {
        type: list,
        payload: todoList,
    }
}

export const getListAsync = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8889/todoList')
        dispatch(getList(res.data))
    }
}

export const addTodo = (name) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:8889/todoList', {
            name,
            done: false,
        })

        dispatch({
            type: add,
            payload: res.data,
        })
    }
}

export const delTodo = (id) => {
    return async (dispatch) => {
        await axios.delete('http://localhost:8889/todoList/' + id)

        dispatch({
            type: del,
            payload: id
        })
    }
}

export const updateTodo = (item) => {
    return async (dispatch) => {
        await axios.put('http://localhost:8889/todoList/' + item.id, item)

        dispatch({
            type: update,
            payload: item
        })
    }
}

export const clearCompleted = (todoList) => {
    return async (dispatch) => {
        for (const item of todoList) {
            await axios.delete('http://localhost:8889/todoList/' + item.id)
        }

        dispatch({
            type: clear,
            payload: true
        })
    }
}

export const updateAll = (todoList) =>{
    return async (dispatch) => {
        for (const item of todoList) {
            await axios.put('http://localhost:8889/todoList/' + item.id, item)
        }

        dispatch({
            type: updateAllDone,
            payload: todoList
        })
    }
}