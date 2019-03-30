import React, { Component } from 'react';
import Todo from './Todo';
import axios from 'axios'

class TodoList extends Component {

  handleDelete(e, id) {
    e.preventDefault();
    axios.delete(`http://localhost:9800/todos/${id}`)
      .then(response =>{
        console.log(response);
      }).catch(error => {
        console.log(error);
    });
  }

  render() {
      const todos = this.props.todos.map( todo =>
        <Todo
          handleDelete={this.handleDelete.bind(this)}
          key={todo.id}
          {...todo}
        />
      )

      return(
        <ul>
          {todos}
        </ul>
      )
  }
}

export default TodoList