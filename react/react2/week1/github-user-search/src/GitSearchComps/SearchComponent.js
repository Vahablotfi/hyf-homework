/*
This Component has an input, where user can type and search for github users.
this component call a function (searchUser), which has been passed to it from the GlobalState component 
and pass the input value to the function as argument. 
*/

import { useContext } from "react"
import React from 'react'
import { GlobalContext } from "./GlobalState"

function SearchComponent() {
  
    const { searchUser } = useContext(GlobalContext);
    
  return (
      <div>
             <h1>Github user searcher</h1>
      <input  placeholder="Search for user" onChange={(event)=>searchUser(event)} />
    </div>
  )
}

export default SearchComponent