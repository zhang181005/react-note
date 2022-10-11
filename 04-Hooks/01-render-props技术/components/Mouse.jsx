//用于封装鼠标移动的逻辑
import { Component } from 'react'

export default class Mouse extends Component {
  state = {
    x: 0,
    y: 0,
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.move)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.move)
  }
  move = (e) => {
    this.setState({
      x: e.pageX,
      y: e.pageY,
    })
  }
  render() {
    return this.props.children(this.state)
  }
}
