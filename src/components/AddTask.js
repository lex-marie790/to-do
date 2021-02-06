import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false)

    const onSubmit=(e) => {
        e.preventDefault() // doesnt submit to a page

        if(!text) {
            alert('Please add task')
            return
        }

        onAdd({ text, date, reminder })

        setText('')
        setDate('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Add your task'
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input 
                    type='date' 
                    placeholder='Add day and time'
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                />
            </div>
            <div className='form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    // this is a checkbox so we are checking to see if it is checked
                    onChange={(e)=>setReminder(e.currentTarget.checked)} 
                />
            </div>
            
            <input type='submit' value='Save Task' className='btn btn-block' />
            
        </form>
    )
}

export default AddTask
