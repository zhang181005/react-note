import {useDispatch, useSelector} from 'react-redux'
import {clearCompleted} from '../store/actions/todoList'
import {useState} from 'react'
import {changeType} from "../store/actions/filter";

function TodoFooter() {
    const [typeList] = useState(['all', 'active', 'completed'])
    const todoList = useSelector((state) => state.todoList)
    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{todoList.filter((item) => !item.done).length}</strong> item
            left
            </span>
            <ul className='filters'>
                {typeList.map((type) => {
                    return (
                        <li key={type}>
                            <a
                                className={filter === type ? 'selected' : ''}
                                onClick={() => {
                                    dispatch(changeType(type))
                                }}
                                href={'#/' + type}
                            >
                                {type}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <button
                className='clear-completed'
                onClick={() => {
                    dispatch(clearCompleted(todoList.filter((item) => item.done)))
                }}
            >
                Clear completed
            </button>
        </footer>
    )
}

export default TodoFooter
