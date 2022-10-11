import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          height: 40,
          backgroundColor: 'skyblue',
          lineHeight: '40px',
          textAlign: 'center',
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
