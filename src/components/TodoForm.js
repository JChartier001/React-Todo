import React, {useState, useReducer} from "react";
import {initialState, reducer} from "../reducers/reducer"
import ToDoList from "./TodoList"
import ToDo from "./TodoItem";



// const ToDoForm =()=> {
//     const [newTask, setNewTask] = useState("");

//     const [state, dispatch] = useReducer(reducer, initialState)
//     console.log("TCL: ToDoForm -> state", state)
    
    

//     const handleInputChange = e => {
//         setNewTask(e.target.value);
//     }

//     const handleCompleted = e => {
//         dispatch({type: "FILTER_DONE"})
//     }
//     // state.map(todo => {
//     // if(applicationCache.payload === ToDo.id){
//     //     ToDo.completed = !ToDo.completed;
//     //     return todo
//     // }})
    

//     const handleButtonClick = (e) => {
//         e.preventDefault();
//         dispatch({type: "ADD_TASK", payload: newTask})
        
//     };
    

    
//     return (
//         <div className="toDoForm">
//             <form onSubmit={handleButtonClick}>
//                 <label htmlFor="newTask">Task</label>
//                 <input type="text" name="newTask" placeholder="Enter To Do Item" id="newTaks" value={newTask} onChange={handleInputChange} />
//                 <button className="addNew">Add New To Do</button>
//                 <button className="removeCompleted" onClick={handleCompleted}>Remove Completed</button>
//                 <ToDoList state={state}/>
//             </form>
//         </div>
//     );
    
// };

// export default ToDoForm;

export default function AddToDo() {
    return(
        <form>
            <input type="text" placeholder="enter new task..." style={{ width: 350, height: 15}}/>
            <input type="submit" style={{float: "right", marginTop: 2}} value="add"/>
        </form>
    );
}