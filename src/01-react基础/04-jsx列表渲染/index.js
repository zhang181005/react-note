import ReactDOM from 'react-dom'

// const list = ['刘备', '关羽', '张飞']
const list = [
  { id: 1, name: 'zhang', address: '济南' },
  { id: 2, name: 'zhang2', address: '北京' },
  { id: 3, name: 'zhang3', address: '上海' },
]

// const element = (
//   <div>
//     <h1>列表渲染</h1>
//     <ul>
//       {list.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
// )

const element = (
  <>
    <h1>用户信息</h1>
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          <h3>序号{item.id}</h3>
          <p>姓名：{item.name}</p>
          <p>所在地：{item.address}</p>
        </li>
      ))}
    </ul>
  </>
)

ReactDOM.render(element, document.getElementById('root'))
