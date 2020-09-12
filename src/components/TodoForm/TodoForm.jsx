import React, { useState } from "react";
import "./TodoForm.css";


function TodoForm(props) {
    // variables 
    const { addTodo } = props;
    const [value, setValue] = useState("");

    // methods 
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue("");
    };

    // template 
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder="Add Todo..."
                onChange={(event) => setValue(event.target.value)}
            />
        </form>
    );
}

export default TodoForm;

