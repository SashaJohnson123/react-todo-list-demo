import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";

function App() {
  //  variables 
  const [todos, setTodos] = useState([
    {
      text: "Finish Plus Project",
      isCompleted: false
    },
    {
      text: "Feed Abbi",
      isCompleted: false
    },
    {
      text: "Walk Abbi",
      isCompleted: false
    },
  ]);

  // methods 
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // template 
  return (
    <div className="app">
      <div className="todo-list">
        <h1>My To Do List</h1>
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

