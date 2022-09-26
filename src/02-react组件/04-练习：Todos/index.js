import { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './style/base.css'
import './style/index.css'

//导入组件
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

class App extends Component {
  state = {
    todoList: [],
    type: 'all',
  }

  render = () => {
    const { todoList } = this.state
    return (
      <section className="todoapp">
        <TodoHeader addTodo={this.addTodo}></TodoHeader>
        <TodoMain
          todoList={todoList}
          delTodoById={this.delTodoById}
          updateDoneById={this.updateDoneById}
          updateNameById={this.updateNameById}
          toggleAll={this.toggleAll}
          type={this.state.type}
        ></TodoMain>
        <TodoFooter
          clearCompleted={this.clearCompleted}
          todoList={todoList}
          type={this.state.type}
          updaeType={this.updaeType}
        ></TodoFooter>
      </section>
    )
  }

  addTodo = (name) => {
    this.setState({
      todoList: [{ id: Date.now(), name, done: false }, ...this.state.todoList],
    })
  }

  delTodoById = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((item) => item.id !== id),
    })
  }

  updateDoneById = (id) => {
    this.setState({
      todoList: this.state.todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          }
        } else {
          return item
        }
      }),
    })
  }

  updateNameById = ({ id, name }) => {
    this.setState({
      todoList: this.state.todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name,
          }
        } else {
          return item
        }
      }),
    })
  }

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter((item) => !item.done),
    })
  }

  toggleAll = () => {
    this.setState({
      todoList: this.state.todoList.find((item) => !item.done)
        ? this.state.todoList.map((item) => {
            return { ...item, done: true }
          })
        : this.state.todoList.map((item) => {
            return { ...item, done: false }
          }),
    })
  }

  updaeType = (type) => {
    this.setState({
      type,
    })
  }

  componentDidMount() {
    this.setState({
      todoList: JSON.parse(localStorage.getItem('todos')) || [],
    })
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todoList))
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
