import React, { useContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import { Context } from '../index'

const TodoItem = (props) => {
  const { item } = props

  const [current, setCurrent] = useState({ id: '', name: '' })

  const { delTodoById, updateDoneById, updateNameById } = useContext(Context)

  useEffect(() => {
    inputRef.current.focus()
  }, [current])

  const updateName = (e) => {
    if (e.keyCode === 27) {
      setCurrent({ id: '', name: '' })
    }
    if (e.keyCode !== 13) return
    if (!current.name.trim()) {
      return alert('内容不能为空！')
    }
    updateNameById({
      id: current.id,
      name: current.name,
    })
    setCurrent({ id: '', name: '' })
  }

  const showEdit = ({ id, name }) => {
    setCurrent({ id, name })
  }

  const inputRef = useRef(null)

  return (
    <li
      className={classNames({
        completed: item.done,
        editing: item.id === current.id,
      })}
    >
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={item.done}
          onChange={() => {
            updateDoneById(item.id)
          }}
        />
        <label onDoubleClick={() => showEdit(item)}>{item.name}</label>
        <button
          onClick={() => {
            delTodoById(item.id)
          }}
          className='destroy'
        ></button>
      </div>
      <input
        className='edit'
        value={current.name}
        onChange={(e) => {
          setCurrent({ id: current.id, name: e.target.value })
        }}
        onKeyUp={updateName}
        onBlur={() => setCurrent({ id: '', name: '' })}
        ref={inputRef}
      />
    </li>
  )
}

export default TodoItem
