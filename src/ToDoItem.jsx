import React from 'react';
import './index.css';

const TodoItem = (props) => {
    return (
      <li>
        {props.todo.text}
        <button onClick={() => props.removeTodo(props.id)}> X</button>
      </li>
    );
  }

  export default TodoItem;