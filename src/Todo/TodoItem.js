import { useContext } from "react"
import Context from "../context"

export default function TodoItem( {task, index, onChange} ) {
    const {removeTodo} = useContext(Context)    
    const classes = []
    if (task.completed || task.id <= 34){  // Второе условие для зачеркивания выученных вопросов
        classes.push('done')
    }

    console.log(task.id, classes)
    return(
        <li className='task'>
            <span className={classes.join(' ')}>
                <input 
                    type="checkbox" 
                    checked={task.completed}
                    className='input' 
                    onChange={() => onChange(task.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                { task.title }
            </span>

            <button className='close' onClick={() => removeTodo(task.id)}>&times;</button>
        </li>
    )
}   