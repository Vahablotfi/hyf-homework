/*
This component is a sub component of singleTodo
and it is wrapped in popup component to be shown whenever edit button is clicked 
This component has the task of editing task or deadline 
passing the values to UpdateTask or Update deadline 
*/

import React, { useState } from 'react'

function UpdateForm({onUpdate,props,onDeadline}) {

  return (
      <div>
           <label>Task</label>
                <input type="text" placeholder='Task'
                        value={props.description} onChange={(e)=>onUpdate(e.target.value)}/>
          
          <label>Dead Line</label>
          <input type="date" placeholder='DeadLine'
              value={props.deadline} onChange={(e)=>onDeadline(e.target.value)}/>
    </div>
  )
}

export default UpdateForm