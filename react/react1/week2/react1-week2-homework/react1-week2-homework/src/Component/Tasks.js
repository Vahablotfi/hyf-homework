import SingleTask from "./SingleTask"


function Tasks({tasks,onDelete,}) {
  return (
    <div>{tasks.map((task) => (
      <SingleTask key={task.id}
        task={task}
        onDelete={onDelete}
        />
    ))}</div>
  )
}


export default Tasks