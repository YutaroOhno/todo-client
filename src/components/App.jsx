import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {

    constructor() {
        super()
        this.state = {
          todos: [
            {
              id: 1,
              title: "Hello, React!",
              desc: "React始めました",
              done: false
            },
            {
              id: 2,
              title: "Hello, Redux!",
              desc: "Reduxも始めました",
              done: false
            },
          ]
        }
      }

    render() {
        return (
            <div>
                <h2>Todo</h2>
                <TodoList
                    todos={this.state.todos}
                />
            </div>
        )
    }
}

export default App;
