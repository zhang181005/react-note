import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {getListAsync} from './store/actions/todoList'

import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

import './style/base.css'
import './style/index.css'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListAsync())
    }, [dispatch])

    return (
        <section className='todoapp'>
            <TodoHeader></TodoHeader>
            <TodoMain></TodoMain>
            <TodoFooter></TodoFooter>
        </section>
    )
}

export default App
