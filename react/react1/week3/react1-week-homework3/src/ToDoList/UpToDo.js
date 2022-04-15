/* This is the parent component for the react1-wee3 homework 
In this week's homework we have to make a to do list with 
2 input form , one for adding task one for adding deadline 
and a button to save the task there has to be a timer on top of the page and
by default we have three task which has to be fetch by a url
and each single task has to have a :1-a button for delete from list
2-a button for editing the the description and date 
3-a checkbox to be checked as done with a line-through

here is the link for homework description page in git hub
https://github.com/HackYourFuture-CPH/React/blob/main/react1/week3/homework.md

for filling all the requirements, I divided the homework to 3 parents components
and each of them includes sub components
Heder component has the task of showing a timer and a title for the list 
to inform how many seconds use has spend in the page.

AddToDo component give user opportunity to add a task in the list and
set a deadline for it 

ToDoItems showing a list of to dos and I wrote conditional to show a message if there is 
no item in the list 

I used the function fetchToDos to do fetch the default items 
and I used useEffect hook to fetch the defaults every time the DOM is loaded
and initiate the default items with a state hook called toDos  

In this component I have two more functions , One of them is deleteToDo which will be passed
as prop to ToDoItems. this function get a property which is an id and use filter method to return 
a new array of toDos without the the id AND initiate that as the state.


The second function in this component is addToDos, which gets a property(object), and 
this function use the array spread operator to add the property(object with id,description and deadline)
to the toDos and initiated to state. this function will be passed as prop to AddToDo component.

there is more explanation for each component in their file .
*/



import React from 'react'
import  { useEffect, useState } from 'react';
import AddToDo from './AddToDo';
import Header from './Header'
import ToDoItems from './ToDoItems';
import './UpdateToDo.css'



 


function UpToDo() {
    const [toDos, setToDos] = useState([])

    useEffect(() => {
      const getToDos = async () => {
      const savedToDos = await fetchToDos()
          setToDos(savedToDos) 
      }
    getToDos()
    }, [])
    
     
  
      const fetchToDos = async () => {
      const res = await fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
       const data = await res.json()
         return data
      }
  
  

        const deleteToDo = (id) => {
    setToDos(toDos.filter((toDo)=>toDo.id!==id))
        }
    
    
    const addToDos = (ToDo) => {
        const newTaskId =toDos.length+1;
        const newTask = {
            id: newTaskId, 
            description: ToDo.description,
            deadline:ToDo.deadline
         }
      setToDos([...toDos, newTask])       
    }
  
  
    
  return (
      <div className='container'>
      <Header></Header>
      
      
        <AddToDo
        onAdd={addToDos}>
       </AddToDo>
      
      
         {toDos.length > 0 ?
              <ToDoItems
                  toDos={toDos} onDelete={deleteToDo}
              >   
              </ToDoItems> :
              ' You Have done all your Todo list'}
      
         
    </div>
  )
}

export default UpToDo