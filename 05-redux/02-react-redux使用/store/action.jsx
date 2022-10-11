export const add = (money) => ({ type: 'ADD', money })

export const minus = (money) => ({ type: 'MINUS', money })

export const addAsync = (money) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(money))
    }, 3000)
  }
}
