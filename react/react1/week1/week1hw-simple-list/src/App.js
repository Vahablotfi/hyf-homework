import TaskList from "./Tasklist";

const tasks = [
  {
    id: 0,
    description: "Get out of bed",
    due_date: "Wed Sep 13 2017",
  },
  {
    id: 1,
   description: "Brush teeth",
    due_date: "Thu Sep 14 2017",
  },
   {
    id: 2,
    description : "Eat breakfast",
    due_date: "Fri Sep 15 2017",
  },
];

function App() {
  return (
   
     
      <TaskList tasks={tasks}></TaskList>
  
  );
}

export default App;
