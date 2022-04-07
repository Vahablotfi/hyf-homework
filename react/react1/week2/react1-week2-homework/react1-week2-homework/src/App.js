import './App.css';
import { useState , useEffect} from 'react';
import Tasks from './Component/Tasks';
import Header from './Component/Header';
import Buttons from './Component/Buttons';

const reservedTasks = [
  'Cook food',
  'Do laundry',
  'Do homeworks',
  'Go shopping',
  'Do exercise',
  'water the plants',
  'Wash the dishes',
  'Prepare for exam'
]

const todoTasks = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
]

function App() {
  const [tasks, setTasks] = useState(todoTasks)

    const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id!==id))
  }
  const addTask = () => {
    const newTaskId = tasks.length + 1;
    const newTaskText = reservedTasks[Math.floor(Math.random() * reservedTasks.length)];
    const newTask = {
      id: newTaskId,
      description : newTaskText
    }
    setTasks(prevTask => {
      return [...prevTask,newTask]
    })
  }


   

  return (
    <div className='container'>
      <Header toAdd= {addTask}></Header>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  ></Tasks>
      :'No Task to do '}
    </div>
  );
}


export default App;
