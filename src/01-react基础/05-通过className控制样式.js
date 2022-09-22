import ReactDOM from 'react-dom'
import './index.css'
import classname from 'classname'

const isRed = true
const isPink = true

const element = (
  <div>
    <h1 className={`${isRed ? 'red' : ''} box`}>通过style控制样式</h1>
    <p className={classname('box', { red: isRed, bgcolor: isPink })}>
      这是一个好东西
    </p>
    <p>这是一个好东西</p>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
