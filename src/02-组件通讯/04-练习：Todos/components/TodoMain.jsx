import classNames from 'classnames'
import React, { Component } from 'react'

export default class TodoMain extends Component {
  state = {
    currentId: '',
    currentName: '',
  }
  render() {
    const { todoList, type } = this.props
    console.log(type)
    let showList = []
    if (type === 'all') {
      showList = todoList
    } else if (type === 'active') {
      showList = todoList.filter((item) => !item.done)
    } else if (type === 'completed') {
      showList = todoList.filter((item) => item.done)
    }
    return (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onClick={this.toggleAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {showList.map((item) => (
            <li
              key={item.id}
              className={classNames({
                completed: item.done,
                editing: item.id === this.state.currentId,
              })}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.done}
                  onChange={() => {
                    this.updateDoneById(item.id)
                  }}
                />
                <label onDoubleClick={() => this.showEdit(item)}>
                  {item.name}
                </label>
                <button
                  onClick={() => {
                    this.delTodo(item.id)
                  }}
                  className="destroy"
                ></button>
              </div>
              <input
                className="edit"
                value={this.state.currentName}
                onChange={(e) => {
                  this.setState({ currentName: e.target.value })
                }}
                onKeyUp={this.updateNameById}
              />
            </li>
          ))}
        </ul>
      </section>
    )
  }

  delTodo = (id) => {
    this.props.delTodoById(id)
  }
  updateDoneById = (id) => {
    this.props.updateDoneById(id)
  }

  showEdit = ({ id, name }) => {
    this.setState({
      currentId: id,
      currentName: name,
    })
  }

  updateNameById = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        currentId: '',
        currentName: '',
      })
    }
    if (e.keyCode !== 13) return
    if (!this.state.currentName.trim()) {
      return alert('内容不能为空！')
    }
    this.props.updateNameById({
      id: this.state.currentId,
      name: this.state.currentName,
    })
    this.setState({
      currentId: '',
      currentName: '',
    })
  }

  toggleAll = () => {
    this.props.toggleAll()
  }
}
