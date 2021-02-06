import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';
import { useState, useEffect } from 'react';



function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {})

    // add task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task }
      setTasks([...tasks, newTask])

      // console.log(task)
    }

    // Delete task takes in an id as parameter
    // the task id that was clicked on, will no longer show up in the list because 
    // we only want to see what is left after being clicked
    const deleteTask = (id) => {
      setTasks(tasks.filter((tasks)=> 
        tasks.id !== id
      ))
    }
    // toggle reminder
    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => 
          task.id === id ? {...task, reminder: !task.reminder} : task
        )
      )
    }

  return (
    
    <div className="App">
      <Header onAdd= {()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/* if there are no more tasks in the list, display "All Tasks Completed" */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 'All Tasks Completed'}
     
    </div>
  );
}

export default App;
