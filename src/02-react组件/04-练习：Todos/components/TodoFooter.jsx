import React, { Component } from 'react'

export default class TodoFooter extends Component {
  render() {
    const { todoList, type } = this.props
    if (todoList.length === 0) {
      return null
    }
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{todoList.filter((item) => !item.done).length}</strong> item
          left
        </span>
        <ul className="filters">
          <li>
            <a
              className={type === 'all' ? 'selected' : ''}
              onClick={() => {
                this.updaeType('all')
              }}
              href="#/"
            >
              All
            </a>
          </li>
          <li>
            <a
              className={type === 'active' ? 'selected' : ''}
              onClick={() => {
                this.updaeType('active')
              }}
              href="#/active"
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={type === 'completed' ? 'selected' : ''}
              onClick={() => {
                this.updaeType('completed')
              }}
              href="#/completed"
            >
              Completed
            </a>
          </li>
        </ul>
        {todoList.some((item) => item.done) && (
          <button className="clear-completed" onClick={this.clearCompleted}>
            Clear completed
          </button>
        )}
      </footer>
    )
  }

  clearCompleted = () => {
    this.props.clearCompleted()
  }

  updaeType = (type) => {
    this.props.updaeType(type)
  }
}
