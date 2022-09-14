import ReactDom from 'react-dom'

const isLogin = true

function loginInfo() {
  if (isLogin) {
    return <div>你好，尊贵的V10用户</div>
  } else {
    return <div>你好，请登录！</div>
  }
  // return isLogin ? <div>你好，尊贵的V10用户</div> : <div>你好，请登录！</div>
  //   return <div>{isLogin ? 你好，尊贵的V10用户 : 你好，请登录！}</div>
}

// ReactDom.render(loginInfo(), document.getElementById('root'))
ReactDom.render(loginInfo(), document.getElementById('root'))
