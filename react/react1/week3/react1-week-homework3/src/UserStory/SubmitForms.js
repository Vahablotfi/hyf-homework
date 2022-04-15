/*
this component is for adding new shifts. It includes three input forms one is type text and two
date-time type. This component has a property which is a function and will be called 
whenever we call the onSubmit function with submitting the form. There are three state hooks
in this component initiate it with empty string. The input forms are controlled components 
and they will update the state on change event. OnSubmit function will be called 
to submit the date , it will first prevent the DOM reloading , then will through an alert 
in input type is empty and then will pass the inputs values to the addShifts function 
in parent component to update the shifts array after calling addShifts function I set the values 
to an empty string again to clear the forms 
*/

import React, { useState } from 'react'

function SubmitForms({onAdd}) {
    const [name, setName] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('please enter your name')
            return
        } else if (!start) {
          alert('please choose start date')
          return
        } else if (!end) {
          alert('please choose the finish date')
          return 
        }
        onAdd({ name, start, end })
        setName('')
        setStart('')
        setEnd('')
    }
    
    return (
     
      <>
        <div className='header'>
          <h1>Submit Your Shift Here</h1>
        </div>
        
      <form className='add-form' onSubmit={onSubmit}>
          <div className="form-control">
              <label>Name</label>
                <input type="text" placeholder='Name'
                    value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>

            <div className="form-control">
              <label>Start Date</label>
                <input type="datetime-local" placeholder='Start-Date'
                value={start} onChange={(e)=>setStart(e.target.value)}/>
          </div>

            <div className="form-control">
              <label>End Date</label>
                <input type="datetime-local" placeholder='End-Date'
                value={end} onChange={(e)=>setEnd(e.target.value)}/>
          </div>
            <input type="submit" value="Submit Your Shift"
            className='btn btn-block'></input>
        </form>
        </>
  )
}

export default SubmitForms