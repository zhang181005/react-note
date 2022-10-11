import ReactDOM from 'react-dom/client'
const App = () => {
  return <div>我是根组件</div>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
