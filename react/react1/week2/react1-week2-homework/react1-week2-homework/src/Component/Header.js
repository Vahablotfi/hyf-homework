import { DefaultContext } from 'react-icons'
import { useState, useEffect } from 'react';
import Buttons from './Buttons'

function Header({ toAdd }) {
    
      const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount+1)
      }, 1000);
  },[])
  return (
      <>
          <h1>Homework Todo</h1>
          <p>You have spent <span style={timerStyle}>{count} </span>seconds in this page</p>
           <Buttons text='Add Task'   onClick={toAdd} />
      </>
  )
}

const timerStyle = { 
    color: 'red',
    fontSize : 30

}

export default Header