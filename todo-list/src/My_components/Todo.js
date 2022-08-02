import React from 'react'
import { ToDoitems } from './Todoitems';

export const ToDo = (props) => {
  let mystyle={
        minHeight:"70vh",
        margin:"40px Auto"

  }
  return (
    <div className='container' style={mystyle}>
      <h3 className='my-3'>ToDo list</h3>
      {props.todos.length===0? "No Todos Found.":
       props.todos.map((todo) => {       //use map function to pass array values
        return <ToDoitems todo={todo} key={todo.sno} onDelete={props.onDelete} />

      })
    }

    </div>
  )
}


