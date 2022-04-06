/*
This component gets three property name(text),start(date-time) and end(date-time)
and displays employee name , and time of starting shift and time of ending shift 
working hours variable calculate how many hours employee have worked and displays it. 
*/

import React from 'react'

function SingleShift({ name, start, end }) {
    
  const cName = `college Name : ${name}.`;
  const shiftStart = `start Time : ${start}`;
  const endShift= `Finish Time : ${end}`
  const ttt = cName;
  const cStart = new Date(start);
  const cEnd = new Date(end);
    const workingHours = cEnd.getHours() - cStart.getHours();
  const info = `${name} have worked ${workingHours} hours.`;

  return (
      <div>
          <h2>{cName}</h2>
          <h4>{shiftStart}</h4>
          <h4>{endShift}</h4>
          <h6 style={{color : 'GrayText'}}>{ info}</h6>
    </div>
  )
}

export default SingleShift