import React from 'react'
import TodoElement from './TodoElement'
function Todolist({todo,HandelDelete,HandelDone}) {
    
  return (
    <div>
       <h1>Element a lire</h1>
      {todo.map((el)=><TodoElement todos={el}   HandelDelete={HandelDelete} HandelDone={HandelDone}/>)} 
    
    </div>
  )
}

export default Todolist
