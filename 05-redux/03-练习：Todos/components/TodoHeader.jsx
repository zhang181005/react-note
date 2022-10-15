import {useEffect, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../store/actions/todoList'

function TodoHeader() {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const keyUp = (e) => {
        if (e.keyCode !== 13) return
        if (!name) {
            return alert('内容不能为空！')
        }
        dispatch(addTodo(name))
        setName('')
    }
    const inputRef = useRef(null);

    useEffect(() => {inputRef.current.focus()}, [name])

    return (
        <header className='header'>
            <h1>todos</h1>
            <input
                className='new-todo'
                placeholder='What needs to be done?'
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyUp={keyUp}
            />
        </header>
    )
}

export default TodoHeader
