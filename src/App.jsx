import React from 'react';
import './index.css';
import ToDoInput from './ToDoInput.jsx';
import ToDoItem from './ToDoItem.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: [],         
          nextId: 0,
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeToDo = this.removeToDo.bind(this);
    }

    addTodo(toDoText) {
      let todos = this.state.todos.slice();
      todos.push({id: this.state.nextId, text: toDoText});
      this.setState({
          todos: todos,
          nextId: ++this.state.nextId
      });
    }

    removeToDo(id) {
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      });
    }

    render() {
      return(
        <div className='app'> 
          <h3>To-Do</h3>
            <ToDoInput addTodo={this.addTodo} todoText='' />
            <ul>{this.state.todos.map((todo) => 
              <ToDoItem todo={todo} id={todo.id} key={todo.id} removeTodo={this.removeToDo}/>)}
            </ul>
        </div>
      );
    }
}

export default App;