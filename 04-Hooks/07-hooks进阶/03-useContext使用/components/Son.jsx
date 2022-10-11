import React, { useContext } from 'react'
import { Context } from '../index'

const Son = () => {
  const { count } = useContext(Context)
  return (
    <div>
      <h4>我是Son组件，根组件点击了{count}次</h4>
    </div>
  )
}

export default Son
