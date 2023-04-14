import React from "react";


const Form = ({getinputtext,todos,gettodos,inputtext}) =>{
  const Inputtexthandler = (e) =>{
    console.log(e.target.value);
    getinputtext(e.target.value)
  };
  const Todohandler = (e) =>{
    e.preventDefault();
    gettodos([
      ...todos, {text: inputtext, completed:false, id:Math.random()*1000}
    ])
  }
    return(
        <form>
      <input onChange={Inputtexthandler} value={inputtext} type="text" className="todo-input" />
      <button onClick={Todohandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      {/* <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div> */}
    </form>
    )
}

export default Form;