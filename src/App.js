import React from "react";
import TodoItem from "./components/TodoItem";


function App() {
  return (
    <div>
      <h1>My To Do List</h1>
      <TodoItem todo="Finish Plus Project." />
      <TodoItem todo="Feed Abbi." />
      <TodoItem todo="Walk Abbi." />
    </div>
  )

}

export default App;

