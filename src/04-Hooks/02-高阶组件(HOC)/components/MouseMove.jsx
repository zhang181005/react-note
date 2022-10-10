//用于封装鼠标移动的逻辑
import React from 'react'

export default function MouseMove(Base) {
  class Mouse extends React.Component {
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
      return <Base {...this.state} {...this.props}></Base>
    }
  }

  return Mouse
}
