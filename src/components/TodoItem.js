import React from "react";


export default function TodoItem ({title, completed, id, toggleTodo, removeTodo}){
    
    function handleToggle () {        
        toggleTodo(id)
    }
    function handleRemove () {        
        removeTodo(id);
    }

    return(
        <div key={id} className={`task ${completed ? ' completed' : ''}`}>
            <label htmlFor="complete">Done</label>
            <input type="checkbox" name="complete" checked={completed} onChange={handleToggle}/>
            {title}
            <button style={{ float: 'right'}} onClick={handleRemove}>Clear</button>
        </div>
    )
    }
