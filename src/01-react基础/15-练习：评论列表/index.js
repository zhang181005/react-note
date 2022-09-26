import React, { Component } from 'react'
import ReactDom from 'react-dom'

import './index.css'

class App extends Component {
  state = {
    list: [
      { id: 1, name: '王思聪', content: '想你的夜' },
      { id: 2, name: '王健林', content: '定一个小目标' },
      { id: 3, name: '马云', content: '我对钱不感兴趣' },
    ],
    user: '',
    content: '',
  }
  render = () => {
    return (
      <div className="app">
        <div>
          <input
            type="text"
            className="user"
            placeholder="请输入评论人"
            name="user"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.add}>发表评论</button>
          <button onClick={this.clear}>清空评论</button>
        </div>
        {this.renderList()}
      </div>
    )
  }

  add = () => {
    const { user, content, list } = this.state
    if (!user || !content) {
      return alert('内容不完整！')
    }
    this.setState({
      list: [
        {
          id: Date.now(),
          name: user,
          content: content,
        },
        ...list,
      ],
      user: '',
      content: '',
    })
  }

  clear = () => {
    this.setState({
      list: [],
    })
  }

  del = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }

  renderList = () => {
    if (this.state.list.length === 0) {
      return <div className="no-comment">暂无评论</div>
    }

    return (
      <ul>
        {this.state.list.map((item) => (
          <li key={item.id}>
            <h3>评论人： {item.name}</h3>
            <p>评论内容：{item.content}</p>
            <button onClick={() => this.del(item.id)}>删除</button>
          </li>
        ))}
      </ul>
    )
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
}

ReactDom.render(<App />, document.getElementById('root'))
