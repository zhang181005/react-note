import {useDispatch, useSelector} from 'react-redux'
import TodoItem from './TodoItem'
import {updateAll} from "../store/actions/todoList";

function TodoMain() {
    let dispatch = useDispatch();
    const todoList = useSelector((state) => {
        switch (state.filter) {
            case 'all':
                return state.todoList
            case 'active':
                return state.todoList.filter(item => !item.done)
            case 'completed':
                return state.todoList.filter(item => item.done)
            default:
                return []
        }
    })
    const toggleAll = () => {
        if (!todoList) return

        if (todoList.find(item => !item.done)) {
            dispatch(updateAll(todoList.map(item => ({...item, done: true}))))
        }else{
            dispatch(updateAll(todoList.map(item => ({...item, done: false}))))
        }
    }
    return (
        <section className='main'>
            <input id='toggle-all' className='toggle-all' type='checkbox' onClick={toggleAll}/>
            <label htmlFor='toggle-all'>Mark all as complete</label>
            <ul className='todo-list'>
                {todoList.map((item) => {
                    return <TodoItem key={item.id} item={item}></TodoItem>
                })}
            </ul>
        </section>
    )
}

export default TodoMain
