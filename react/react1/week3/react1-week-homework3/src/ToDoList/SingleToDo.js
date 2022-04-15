/*
This component is the child component of ToDoItems.js 
and it returns a task description , a task due date , 
THis component has 3 state: the first one (item state) is for editing the task 
description or date.

The second state is popupButton state with default value of false 
I used this state and a popup component for task editing opportunity . 
It works in the way that with clicking on edit button popupButton value will be set to true 
and when the value is true instead of task we get UpdateForm component which has two input form to 
change the description and deadline and a save button to  updated the item value and set the
popupButton value to false again . if the value is false we see a description 
a deadline , a checkbox and two button to delete and edit
The Third state (isChecked) has a default false value .
 With checking the check box we call the doneTask function which changes the value of isChecked
 IF the value of isChecked is true the description will get a  "line-through" style 
 and instead of due date we see Done!! message

 This component has two sub component called popup and UpdateForm which will be called when the popupButton state changes
  Updated form is wrapped in popup and will be shown when we want to edit the task

*/

import { FaTimes } from 'react-icons/fa'
import Buttons from './Buttons'
import { useState } from 'react';
import UpdateForm from './UpdateForm';
import Popup from './Popup';



function SingleToDo({ toDo, onDelete, }) {
    
  const [item, setItems] = useState(toDo)
  const [popupButton, setPopupButton] = useState(false);
  const [isChecked, setIsChecked] = useState(false)
   
  const doneTask = (id) => {
    isChecked === false ? setIsChecked(true) : setIsChecked(false)
  }


  const updateTask = (e) => {
    setItems({
      ...item,
      description: e,
    })
  }
  
  const updateDeadline = (e) => {
    setItems({
      ...item,
      deadline: e,
    })
  }

  return (
    
    <>
      {popupButton ?
        <Popup trigger={setPopupButton} setTrigger={popupButton}>
          <UpdateForm onUpdate={updateTask} onDeadline={updateDeadline} props={item}></UpdateForm>
        </Popup> :
        <div className='task'>
          <div className='form-control-check'>
            <h3 style={isChecked === true ? { textDecoration: "line-through" } : {}} >
              {item.description}
            </h3>
              
            {isChecked === true ? <h3 style={{ color: 'Green' }}>Done!!</h3> :
              <h5 style={{ color: 'red' }}>Has to be Done by {item.deadline}</h5>}
            <label>Mark as Done</label>
            <input type='checkbox' onChange={doneTask} ></input>
            
          </div>
          
          <div >
            <Buttons text='clear' backgroundColor='black' onClick={() => onDelete(toDo.id)} />
            <Buttons text='Edit' backgroundColor='black'
              onClick={() => setPopupButton(true)} >
            </Buttons>
            <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(toDo.id)} />
          </div>
     
     
          <Popup trigger={popupButton} >
            <UpdateForm onUpdate={updateTask} onDeadline={updateDeadline} props={item}></UpdateForm>
          </Popup>
        </div>
      }
    </>

    
  )
}



export default SingleToDo