import React from "react";
import Todo from "./Todo";


const Todolist = ({todos,gettodos}) => {
    return(
        <div className="todo-container">
           <ul className="todo-list">
           {todos.map(todo=>(
             <Todo text={todo.text} key={todo.id} gettodos={gettodos} todos={todos} todo={todo}/>
           ))}
           </ul>
           
        </div>
    )
};


export default Todolist;