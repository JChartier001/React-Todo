import React, {useState} from "react";

export default function AddTodo ({addTodo}) {
    const [input, setInput] = useState('');

const handleInput = e => {
    setInput(e.target.value);
};

const handleAdd = () => {
    
    if (input) {
        addTodo(input)
        setInput('')
    }
};
    return (
        <form onSubmit={e => {e.preventDefault(); handleAdd()}} >
        <input type="text" name="toDo" placeholder="Enter To Do Item" id="toDo" value={input} onChange={handleInput} />
        <button onClick={handleAdd}>Add Task</button>
        </form>
    )
}
