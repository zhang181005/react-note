import ReactDOM from 'react-dom'
import Hello from './components/Hello'
import Demo from './components/Demo'
import { Component } from 'react'

class Hi extends Component {
  render() {
    return <div>hi,这是一类组件</div>
  }
}

const element = (
  <div>
    <Hi></Hi>
    <Hello></Hello>
    <Demo></Demo>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
