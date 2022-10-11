import ReactDOM from 'react-dom/client'

import Cat from './components/Cat'
import Position from './components/Position'
import MouseMove from './components/MouseMove'

const CatMove = MouseMove(Cat)
const PositionMove = MouseMove(Position)

const element = (
  <div>
    <h1>我是App组件</h1>
    <hr />
    <CatMove></CatMove>
    <hr />
    <PositionMove></PositionMove>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)
