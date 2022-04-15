/*
ShiftOverview component is a parent component which get an array of objects (fetched data ).
This component has a child component called SingleShift.js . SingleShift returns 
4 line of information of the prop it receives from the parent component.
I have used a state hook called searchItems for this component and initiate that with an empty string.
I used this state to search through the names in every objects that we got in array from 
parent component.
I return part there is a input which on change sets the searchItem value to what has been written 
in the the input . few lines lower than that , I Used filter method to return only the objects which matches 
the input form and if input is empty it uses map method to passes name / start / end to the 
single shift component.    

*/
import FancyBorder from './FancyBorder';
import { useState } from 'react'
import SingleShift from './SingleShift';
import { FaSearch } from "react-icons/fa";





function ShiftOverview({ shifts }) {
   const [searchItem,setSearchItem]=useState('')




  
    return (
      <div >
           <div className='header'>
             <h1>Shifts Overview</h1>
        </div>
        
           <div className="search">
                    <div className="searchInputs">
                      <input type='text' placeholder='Search employee Name here' onChange={(e) => setSearchItem((e.target.value).toLowerCase())}/>
                      <div className="searchIcon">
                        <FaSearch></FaSearch>
                      </div>
                    </div>
            </div>
        
        {shifts
          .filter((shift) =>
            shift.name.toLowerCase().includes(searchItem))
          
          .map((shift, index) =>(
            <FancyBorder key={index}
              child={<SingleShift
            name={shift.name}
            start={shift.start}
            end={shift.end}
          ></SingleShift>
          }></FancyBorder>
        ))}

      </div>
    )
  
}

export default ShiftOverview