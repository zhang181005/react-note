import image from '../utils/ttt.png'

const Cat = ({ x, y }) => {
  return (
    <div>
      <h3>我是Cat组件</h3>
      <img
        src={image}
        style={{
          left: x,
          top: y,
          position: 'absolute',
        }}
        alt=''
      />
    </div>
  )
}

export default Cat
