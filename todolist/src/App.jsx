import AddTodo from './Component/AddTodo';
import Todolist from './Component/Todolist';
import './App.css';
import { useState } from 'react';

const App =()=> {
  const[todo,setTodo]= useState([{id:1,text:"task1",isDone:false}, {id:2,text:"task2",isDone:false},
  {id:3,text:"task3",isDone:false},{id:4,text:"task4",isDone:false}])
const HandelDelete=(ID)=>{
  setTodo(todo.filter((el)=>el.id !== ID))

}
const HandelDone=(ID)=>{
  setTodo(
    todo.map((el)=>(el.id ===ID ?{...el,isDone:! el.isDone}:el)))

}
const HandelAdd=(newadd)=>{
  setTodo([...todo,newadd])
}
  return (
    <div>
     <h1>To do list</h1>
     <AddTodo  HandelAdd={HandelAdd}/>
     <Todolist  todo={todo} HandelDelete={HandelDelete} HandelDone={HandelDone}/>
     
    </div>
  );
}

export default App;
