function TaskItems(props) {
    return (      
        <li>
            <h1>
                Description:{props.description}
                <p>
                    Due date: {props.due_date}
                   
                </p>
            </h1>
         
        </li>
    );
}
export default TaskItems