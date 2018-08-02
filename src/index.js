import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return(
          <div className='app'> 
              <h3>To-Do</h3>
              <New />
              <List /> 
          </div>
        );
    }
}

const New = (props) => {
  return (
    
  );
}

const List = (props) => {
  return (

  );
}




ReactDOM.render(<App />, document.getElementById('root'));