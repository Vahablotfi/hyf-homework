/*
One of the requirements in the assignment was to make a parent component
which passes its props to child components ,and we made this fancy border component to 
give a  styled border to the child components. quite same as popup component.
 
*/

import React from 'react'

function FancyBorder({child}) {
  return (
      <div style={borderStyle}>
          {child}
    </div>
  )
}



const borderStyle = {
   
  maxWidth: '500px',
  margin: '30px auto',
  overflow: 'auto',
  minHeight: '300px',
  border: '3px solid  purple',
  padding: '30px',
  borderRadius: '10px',

}

export default FancyBorder