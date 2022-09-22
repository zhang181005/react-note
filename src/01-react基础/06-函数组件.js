import ReactDOM from 'react-dom'

/*
  组件名称首字母必须大写
  组件必须有返回值，不需要返回时使用null
 */
function Hello() {
  return <div>Hello组件</div>
}

const Hi = () => <div>Hi组件</div>

const element = (
  <div>
    <h1>函数组件</h1>
    <Hello></Hello>
    <Hi></Hi>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
