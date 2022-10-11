import { useState } from 'react'

const TodoHeader = ({ addTodo }) => {
  const [name, setName] = useState('')

  const addTodos = (e) => {
    if (e.keyCode !== 13) return
    if (!name) {
      return alert('内容不能为空！')
    }
    addTodo(name)
    setName('')
  }

  return (
    <header className='header'>
      <h1>todos</h1>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        autoFocus=''
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        onKeyUp={addTodos}
      />
    </header>
  )
}

export default TodoHeader
