import React, {useReducer, useEffect, useMemo} from 'react';
import appReducer from "./reducers/reducer";
import "../src/components/Todo.css";
import StateContext from "./components/StateContext";
import {fetchAPITodos} from "./components/api";
import TodoFilter from './components/TodoFilter';
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList"




function App (){
  const [state, dispatch] = useReducer(appReducer, {todos: [], filter:'all'})


  useEffect(() => {
    fetchAPITodos().then((todos) =>
      dispatch({ type: 'FETCH_TODOS', todos})
    )
    }, [])
  
    const filteredTodos = useMemo(() => {
      const {filter, todos} = state
      switch (filter) {
        case "active":
          return todos.filter(t => t.completed === false)
        case "completed":
          return todos.filter(t => t.completed === true)
        default:
          case "all":
            return todos
      }
      }, [state])

  function addTodo (title) {
    dispatch({type: "ADD_TODO", title})
  }

  function toggleTodo (id) {
   dispatch({ type: "TOGGLE_TODO", id})
  }

  function removeTodo (id){
   dispatch({ type: "REMOVE_TODO", id})
  }

  function filterTodos (filter) {
   dispatch({type: 'FILTER_TODO', filter})
    }
    
    return(
      <StateContext.Provider value={filteredTodos}>
        <div style={{ width: 400}}>
          <AddToDo addTodo={addTodo} />
          <hr />
          <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} />
          <hr />
          <TodoFilter filter={state.filter} filterTodos={filterTodos}/>
        </div>
      </StateContext.Provider>
    )
  
    }
export default App;