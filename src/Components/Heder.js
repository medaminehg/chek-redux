import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {actions}from "../JS/actions"
import TodoList from './TodoList'
import './HederStyle.css'
import {Form} from 'react-bootstrap'

function Heder() {
    const [texte, setTexte] = useState("")
    
    const dispatch = useDispatch()
    const add =(e)=>{
        e.preventDefault();
        texte ? dispatch(actions({texte:texte,id:Math.random(),IsDone:false  })):alert("add new text");setTexte("")

    }
   
    return ( 
    
    <div>

<Form onSubmit={add}>
                    <Form.Group>
            <div className="header">
            <h2 style={{margin:5}}>My To Do List</h2>
           
                <input className='input' type='text' value={texte} onChange={(e) => setTexte(e.target.value) } />
                <button className="addBtn" onClick={() => add()} > ADD</button>
                </div>
                <TodoList/>
                
                    </Form.Group>
                </Form>
    </div>
                
         
      )
}

export default Heder

