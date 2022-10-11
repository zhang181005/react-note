import React from 'react'
import TodoItem from './TodoItem'

const TodoMain = (props) => {
  const { todoList, type } = props

  let showList = []
  if (type === 'all') {
    showList = todoList
  } else if (type === 'active') {
    showList = todoList.filter((item) => !item.done)
  } else if (type === 'completed') {
    showList = todoList.filter((item) => item.done)
  }

  const toggleAll = () => {
    props.toggleAll()
  }

  return (
    <section className='main'>
      <input
        id='toggle-all'
        className='toggle-all'
        type='checkbox'
        onClick={toggleAll}
      />
      <label htmlFor='toggle-all'>Mark all as complete</label>
      <ul className='todo-list'>
        {showList.map((item) => (
          <TodoItem {...props} item={item} key={item.id}></TodoItem>
        ))}
      </ul>
    </section>
  )
}

export default TodoMain
