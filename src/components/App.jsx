import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form'

class App extends Component {

  constructor() {
    super()
    const todos = []
    this.state = {
      todos: todos,
      countTodo: todos.length + 1,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const text = e.target.text.value;
    const todos = this.state.todos.slice()
    const countTodo = this.state.countTodo

    todos.push({
      id: countTodo,
      title: title,
      text: text,
      done: false,
    });

    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1 })

    e.target.title.value = '';
    e.target.text.value = '';
  }

    render() {
        return (
            <div>
                <h2>Todo</h2>
                <Form handleSubmit={this.handleSubmit.bind(this)} />
                <TodoList
                    todos={this.state.todos}
                />
            </div>
        )
    }
}

export default App;
