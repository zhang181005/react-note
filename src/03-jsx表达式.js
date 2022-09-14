import ReactDom from 'react-dom'

const address = '济南'
const name = 'zhang'
const friends = ['f1', 'f2']
const car = {
  brand: ['川', '雷'],
}

const fn = () => {
  return (
    <div>
      <p>第一行</p>
      <p>第二行</p>
    </div>
  )
}

const element = (
  <>
    <div>姓名：{name}</div>
    <div>地址:{address}</div>
    <div>朋友:{friends[0]}</div>
    <div>交通工具:{car.brand[0]}</div>
    <div>{fn()}</div>
  </>
)

// ReactDom.render(loginInfo(), document.getElementById('root'))
ReactDom.render(element, document.getElementById('root'))
