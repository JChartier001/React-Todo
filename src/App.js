import React from 'react';
import ToDoList from "./components/TodoComponents/TodoList"
import "../src/components/TodoComponents/Todo.css";

class App extends React.Component {
  state = {toDo: ""};
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}

export default App;
