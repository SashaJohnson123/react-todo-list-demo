import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

function App() {
  //  variables 
  const [todos, setTodos] = useState([
    "Finish Plus Project",
    "Feed Abbi",
    "Walk Abbi",
  ]);

  // methods 
  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  // template 
  return (
    <div>
      <h1>My To Do List</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;

