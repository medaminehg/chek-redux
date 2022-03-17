import React,{useState} from 'react'
import {Button,Modal}from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'
import {actionsedit}from "../JS/actions"
 
function Edit({id}) {
    const [show, setShow] = useState(false);
    const [texte, setTexte] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
  return (
    <div>
      
       <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h2>new text</h2>
        <input type='text'  value={texte} onChange={(e) => setTexte(e.target.value)}/>  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={() => {((texte)?dispatch(actionsedit({texte:texte,id:id})):alert("add new text"));setTexte("");handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
