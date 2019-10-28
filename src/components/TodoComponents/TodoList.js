import React from "react";


const handleButtonClick = () => {
    
}

const ToDoList = () =>{
    return (
        <div className="toDoList">
            <form>
                <input type="text" placeholder="Enter To Do Item" />
                <button onClick={handleButtonClick}className="addNew">Add To Do</button>
            </form>
        </div>
    );
};

export default ToDoList;