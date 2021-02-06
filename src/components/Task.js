import { FaPaw } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=> onToggle(task.id)}>
            {/* this is the individual task that being added in */}
            <h3>
                {task.text} 
            </h3>
            <p>{task.date}</p>
            <FaPaw className='paw'
                    style={{color: '#02A9EA', cursor: 'progress', fontSize: 'xx-large'}} 
                    onClick={()=> onDelete(task.id)}
                />
        </div>
    )
}

export default Task
