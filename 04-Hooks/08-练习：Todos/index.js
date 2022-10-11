import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import './style/base.css'
import './style/index.css'

//导入组件
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

export const Context = React.createContext()
const { Provider } = Context

function useTodos() {
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || []
  })

  const [type, setType] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])

  const addTodo = (name) => {
    setTodoList([{ id: Date.now(), name, done: false }, ...todoList])
  }

  const delTodoById = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id))
  }

  const updateDoneById = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done }
        } else {
          return item
        }
      })
    )
  }

  const updateNameById = ({ id, name }) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, name }
        } else {
          return item
        }
      })
    )
  }

  const toggleAll = () => {
    setTodoList(
      todoList.find((item) => !item.done)
        ? todoList.map((item) => {
            return { ...item, done: true }
          })
        : todoList.map((item) => {
            return { ...item, done: false }
          })
    )
  }

  const clearCompleted = () => {
    setTodoList(todoList.filter((item) => !item.done))
  }

  const updateType = (type) => {
    setType(type)
  }

  return {
    addTodo,
    todoList,
    delTodoById,
    updateDoneById,
    updateNameById,
    toggleAll,
    type,
    clearCompleted,
    updateType,
  }
}

const App = () => {
  const {
    addTodo,
    todoList,
    delTodoById,
    updateDoneById,
    updateNameById,
    toggleAll,
    type,
    clearCompleted,
    updateType,
  } = useTodos()

  return (
    <Provider value={{ delTodoById, updateDoneById, updateNameById }}>
      <section className='todoapp'>
        <TodoHeader addTodo={addTodo}></TodoHeader>
        <TodoMain
          todoList={todoList}
          toggleAll={toggleAll}
          type={type}
        ></TodoMain>
        <TodoFooter
          clearCompleted={clearCompleted}
          todoList={todoList}
          type={type}
          updateType={updateType}
        ></TodoFooter>
      </section>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
