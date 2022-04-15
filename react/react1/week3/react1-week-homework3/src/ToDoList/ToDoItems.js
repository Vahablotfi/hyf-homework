/*
This component gets an array and a function as prop.
with use of array .map method , returns a sub component called 
single todo and gets a to do component which is an object , a key , and a function 
*/
import { useState } from "react"
import SingleToDo from "./SingleToDo"


function ToDoItems({ toDos, onDelete,}) {

  

  return (
    <div>
      {toDos.map((toDo) => (
      <SingleToDo key={toDo.id}
        toDo={toDo}
        onDelete={onDelete}
        />
    ))}
    </div>
  )
}

export default ToDoItems