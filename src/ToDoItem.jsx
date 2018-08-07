import React from 'react';
import './index.css';

const TodoItem = (props) => {
    return (
      <li>
        {props.todo.text}
        <button className='removeBtn' onClick={() => props.removeTodo(props.id)}> X</button>
      </li>
    );
  }

  export default TodoItem;