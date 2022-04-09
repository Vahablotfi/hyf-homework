/*
This has 2 input and a submit button to give the user opportunity to add 
a task and due date. I have used two state hooks to get the value of input forms 
and with help onSubmit function and using call back patterns values would passed to 
addToDos function in  parent component and from there will be added to toDos
after calling onAdd prop in on Submit function ,I initiate description and deadline hook to
an empty string , that is for clearing the input form after submit.

there is also conditions in onSubmit to prevent rerendering DOM and  giving alert to user 
if the input is empty 
*/


import React, { useState } from 'react'


function AddToDo({onAdd}) {
    const [description, setDescription] = useState('')
    const [deadline, setDeadline] = useState('')
   

    const onSubmit = (e) => {
        e.preventDefault()
        if (!description) {
            alert('please enter your Task first')
            return
        } else if (!deadline) {
             alert('please enter your deadline first')
            return
        }
        onAdd({ description, deadline})
        setDescription('')
      setDeadline('')
    
    }
    
    return (
     
      <>
        <div className='header'>
          <h1>Add a task to your Todo list</h1>
        </div>
        
      <form className='add-form' onSubmit={onSubmit}>
          <div className="form-control">
              <label>Task</label>
                <input type="text" placeholder='Task'
                        value={description} onChange={(e)=>setDescription(e.target.value)}/>
          </div>

            <div className="form-control">
              <label>Dead Line</label>
                <input type="date" placeholder='DeadLine'
                value={deadline} onChange={(e)=>setDeadline(e.target.value)}/>
          </div>

         
            <input type="submit" value="Add to your list"
            className='btn btn-block'></input>
        </form>
        </>
  )
}

export default AddToDo