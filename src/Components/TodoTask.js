import React from 'react'
import { useDispatch} from 'react-redux'
import {actionsdelet, actionsdone} from "../JS/actions"
import Edit from './Edit'
import {Button} from 'react-bootstrap'
function TodoTask({task}) {
  
  const dispatch = useDispatch()
  
  return (
    <div className='p'>
        <p style={{ margin: "0px", textDecoration: task.IsDone ? "line-through" : "" }} className={task.isDone ?"Isdone":""}>{task.txt}</p>
<div className='btns'>
        <Button variant="primary" onClick= {() => dispatch(actionsdelet({id: task.id}))}>Delete</Button>
       <Button variant="primary" className='Isdone'  onClick= {() =>  dispatch(actionsdone({id: task.id}))}>{task.IsDone ?"IsDone":"Done"}</Button>  
      <Edit id={task.id}/>
</div>
          
    
    </div>
  )
}

export default TodoTask
