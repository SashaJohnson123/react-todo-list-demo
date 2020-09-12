import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const { todo, completeTodo, index, removeTodo } = props;
    return (
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    );
}

export default TodoItem;

