import { useRef } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const inputRef = useRef(null)

  return (
    <div>
      <h1>我是根组件</h1>
      <input type='text' ref={inputRef} placeholder='请输入内容' />
      <button
        onClick={() => {
          console.log(inputRef.current.value)
        }}
      >
        取值
      </button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
