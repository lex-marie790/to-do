import Task from './Task.js'

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {/* with map we need a key for each item, mapping returns a list*/}
            {/* this is return all the tasks in the lists */}
            {tasks.map((task) => (
                <Task key ={task.id} task={task} onDelete ={onDelete} onToggle={onToggle} />
            ))}  
        </>
    )
}

export default Tasks
