import React from 'react'
import { useState } from 'react'

function AddTodo ({HandelAdd}) {
  const[input ,setInput]=useState('')
  const AddTodo=()=>{
    HandelAdd({
      id:Math.random(),
      isDone:false,
      text:input
    })
  }

  return (
  <div>
  <table border='1px'>
      <tr>
        <th>
      <input type="text" placeholder='ecrire nouveau task' onChange={(e)=>setInput(e.target.value)} /></th>
    <th> <button onClick={()=>AddTodo()}>add</button></th>
      
      </tr>
  </table>  
  </div>

    
  )
}

export default AddTodo
