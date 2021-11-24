import TodoItem from "./TodoItem"


function TodoList(props) {
    return(
        <ul className='list'>
            { props.array.map((todo, index) => {
                return (
                <TodoItem 
                task={todo} 
                key={todo.id} 
                index={index} 
                onChange={props.onToggle}/>)
            }) }
        </ul>
    )
}

export default TodoList