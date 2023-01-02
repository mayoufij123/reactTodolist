import React from 'react'

function TodoElement({todos,HandelDelete,HandelDone}) {
  return (
    <div className='task'>
      <table border='1px'>
      <ul>
        <td>
        <li>{todos.text}</li></td>
        <td><button onClick={()=>HandelDone(todos.id)}>{todos.isDone?"it is ok" :"done"}</button>
        <button onClick={()=>HandelDelete(todos.id)}>delete</button></td>
      </ul>
      </table>
    </div>
  )
}

export default TodoElement
