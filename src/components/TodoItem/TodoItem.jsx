import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const { todo, completeTodo, index } = props;
    return (
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
            </div>
        </div>
    );
}

export default TodoItem;

