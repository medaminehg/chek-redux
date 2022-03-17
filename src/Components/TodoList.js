import React from 'react'
import { useSelector } from 'react-redux'
import TodoTask from './TodoTask'

function TodoList() {
    const s = useSelector(state => state.text)
    
  return (
    <div>
      {s.map((el,i)=><TodoTask task={el} key={i} />)}
    </div>
  )
}

export default TodoList
