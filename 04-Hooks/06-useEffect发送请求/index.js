import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    let isChanel = false
    const getList = async () => {
      const res = await axios.get('http://geek.itheima.net/v1_0/channels')
      if (isChanel) return
      setList(res.data.data.channels)
    }
    getList()

    return () => {
      isChanel = true
    }
  }, [])

  return (
    <div>
      <h1>频道列表</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
