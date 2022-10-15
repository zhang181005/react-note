import {useDispatch} from 'react-redux'
import {delTodo, updateTodo} from '../store/actions/todoList'
import classNames from 'classnames'
import {useEffect, useRef, useState} from 'react'

export default function TodoItem({item}) {
    const dispatch = useDispatch()
    const [current, setCurrent] = useState({id: '', name: ''})
    const inputRef = useRef(null)

    const updateName = (e) => {
        if (e.keyCode === 13) {
            dispatch(updateTodo({...current, done: item.done}))
            setCurrent({id: '', name: ''})
        } else if (e.keyCode === 27) {
            setCurrent({id: '', name: ''})
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [current])

    return (
        <li
            className={classNames({
                completed: item.done,
                editing: current.id === item.id,
            })}
        >
            <div className='view'>
                <input
                    className='toggle'
                    type='checkbox'
                    checked={item.done}
                    onChange={() => dispatch(updateTodo({...item, done: !item.done}))}
                />
                <label
                    onDoubleClick={() => setCurrent({id: item.id, name: item.name})}
                >
                    {item.name}
                </label>
                <button
                    className='destroy'
                    onClick={() => dispatch(delTodo(item.id))}
                ></button>
            </div>
            <input
                className='edit'
                value={current.name}
                ref={inputRef}
                onChange={(e) => setCurrent({id: current.id, name: e.target.value})}
                onKeyUp={updateName}
                onBlur={() => setCurrent({id: '', name: ''})}
            />
        </li>
    )
}
