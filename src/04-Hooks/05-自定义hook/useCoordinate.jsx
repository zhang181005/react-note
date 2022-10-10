import { useState, useEffect } from 'react'

//自定义hook名称必须使用use开头
export default function useCoordinate() {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      setCoordinate({ x: e.pageX, y: e.pageY })
    }
    document.addEventListener('mousemove', move)

    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return coordinate
}
