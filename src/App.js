import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App()
{
  const [inputtext, getinputtext]= useState("");
  const [todos,gettodos]=useState([]);
  return(
    <div>
      <header>
      <h1>Todo App</h1>
    </header>
    <Form gettodos={gettodos} todos={todos} getinputtext={getinputtext} inputtext={inputtext} />
    <Todolist todos={todos} gettodos={gettodos} />
    </div>
    );
    }
    
export default App;
