import React, { Component } from 'react'

export default class Children extends Component {
  render() {
    console.log('Children组件的render()')
    return (
      <div>
        <h3>我是CHildren组件, 父组件被点击了{this.props.count}次</h3>
      </div>
    )
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('我是Children组件')
    }, 1000)
  }

  componentDidUpdate() {
    console.log('Children组件的componentDidUpdate()')
  }

  componentWillUnmount() {
    console.log('Children组件无了')
    clearInterval(this.timer)
  }
}
