import React from 'react';
import './index.css';

class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
    
  }

  render() {
    return (
      <div>
        <input 
          type='text'
          placeholder='Enter a new to do item' 
          className='input'
          value= {this.state.value}
          onChange={this.handleChange}
          />
        <button className='addBtn' onClick={(e)=>this.addTodo(this.state.value)}>add</button>
      </div>
    )
  }
    
    
  }
  

  export default ToDoInput;