import ReactDom from 'react-dom'

const element = (
  <>
    <div id='div1' className='test'>
      <h1>标题</h1>
      <ul className='list'>
        <li>橙子</li>
        <li>菠萝</li>
        <li>香蕉</li>
      </ul>
    </div>
    <span>span</span>
  </>
)

ReactDom.render(element, document.getElementById('root'))
