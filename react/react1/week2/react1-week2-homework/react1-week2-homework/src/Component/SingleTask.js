import {FaTimes} from 'react-icons/fa'
import Buttons from './Buttons'
import { useState } from 'react';

function SingleTask({ task, onDelete, onChange }) {
    
    const [isChecked, setIsChecked] = useState(false)
    
  const doneTask = (id) => {
    isChecked === false ? setIsChecked(true) : setIsChecked(false)

  }
  return (
      <div className='task'>
          <h3 style={isChecked === true ? { textDecoration: "line-through" } : {}} >
              {task.description}
               <Buttons text='Delete' backgroundColor='black' onClick={() => onDelete(task.id)} />
          </h3>
          <div className='form-control-check'> 
          <label>Mark as Done</label>
              <input type='checkbox' onChange={doneTask} ></input> 
         </div>
          
          <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)}/>
              
          
    </div>
  )
}

export default SingleTask