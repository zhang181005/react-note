import React, { Component } from 'react'
import classNames from 'classnames'

export default class TodoItem extends Component {
  state = {
    currentId: '',
    currentName: '',
  }
  inputRef = React.createRef()
  render() {
    const { item } = this.props
    return (
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
          <label onDoubleClick={() => this.showEdit(item)}>{item.name}</label>
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
          onBlur={() => this.setState({ currentId: '' })}
          ref={this.inputRef}
        />
      </li>
    )
  }

  delTodo = (id) => {
    this.props.delTodoById(id)
  }
  updateDoneById = (id) => {
    this.props.updateDoneById(id)
  }

  showEdit = ({ id, name }) => {
    this.setState(
      {
        currentId: id,
        currentName: name,
      },
      () => {
        this.inputRef.current.focus()
      }
    )
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
  componentDidUpdate() {}
}
