const TodoFooter = (props) => {
  const { todoList, type, updateType } = props
  const typeList = ['all', 'active', 'completed']

  const clearCompleted = () => {
    props.clearCompleted()
  }

  if (todoList.length === 0) {
    return null
  }

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{todoList.filter((item) => !item.done).length}</strong> item
        left
      </span>
      <ul className='filters'>
        {typeList.map((item) => {
          return (
            <li key={item}>
              <a
                className={type === item ? 'selected' : ''}
                onClick={() => updateType(item)}
                href={'#/' + item}
              >
                {item}
              </a>
            </li>
          )
        })}
      </ul>
      {todoList.some((item) => item.done) && (
        <button className='clear-completed' onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}

export default TodoFooter
