import React from 'react';
import './index.css';
import ToDoItem from './ToDoItem.jsx';

const List = (props) => {
    return (
      <ul>{props.todos.map((todo) => 
        <ToDoItem todo={todo} id={todo.id} key={todo.id} removeTodo={props.removeToDo}/>)}
      </ul>
    );
  }
  
export default List;