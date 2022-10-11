import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import CatImg from './utils/ttt.png'

import useCoordinate from './useCoordinate'

function Cat() {
  const { x, y } = useCoordinate()
  return (
    <img
      src={CatImg}
      alt='cat'
      style={{ left: x, top: y, position: 'absolute' }}
    />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Cat></Cat>)
