import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {

    render() {
        return (
            <div>
                <h2>Todo</h2>
                <TodoList />
            </div>
        )
    }
}

export default App;
