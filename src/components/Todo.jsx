import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return(
      <li>
        <p>
        <span onClick={e => this.props.handleDelete(e, this.props.id)}>❎</span>
        <span>{this.props.title} : {this.props.text}</span>
        </p>
      </li>
    );
  }

}

export default Todo