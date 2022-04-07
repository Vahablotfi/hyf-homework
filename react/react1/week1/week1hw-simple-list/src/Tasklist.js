import TaskItems from "./Taskitems";

function TaskList(props) {
    const result = props.tasks.map((task) => {
        return <TaskItems description={task.description} due_date={task.due_date} key={task.id} />;
    });
    return (
        <ul>
          {result}
        </ul>
    );
}


export default TaskList