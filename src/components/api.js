



export const fetchAPITodos = () =>
    new Promise((resolve) =>
    setTimeout(()=> resolve([
        {id:Date.now(), title: "Write React Hooks book", completed: true},
        {id:Date.now(), title: "Promise Book", completed:false}    
]), 100)
)