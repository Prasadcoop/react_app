import './App.css';
import Header from "./My_components/Header";
import { ToDo } from './My_components/Todo';
import { Footer } from "./My_components/Footer";
import { AddTodo } from "./My_components/AddTodo";
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {                              //ondelete function
    console.log("I am on delete", todo);

    setTodos(todos.filter((e) => {
      return e != todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addtodo = (title, desc) => {
    console.log("I am adding this todo...", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo)
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="My ToDo List" SearchBar={false} />
      {/* passing todo array */}
      <AddTodo addtodo={addtodo} />
      <ToDo todos={todos} onDelete={onDelete} />

      <Footer />

    </>
  );
}

export default App;
