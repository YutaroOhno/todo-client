import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form'
import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    const todos = []
    this.state = {
      todos: todos,
    }
  }

  componentDidMount() {
    // ハードコーディングはやめる
    axios.get('http://localhost:9800/todos', {}).then((response) => {
      this.setState({todos: response.data.todos})
    }).catch((response) => {
      console.log(response)
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // axiosでpostの場合、サーバーサイド側にoptionsで１度送られるので、以下の記述で解消する。
    const params = new URLSearchParams();
    params.append('title', e.target.title.value);
    params.append('text', e.target.text.value);

    // ハードコーディングはやめる
    // axios.post('http://localhost:9800/todos',params,)
    axios.post('http://localhost:9800/todos',params)
      .then(response =>{
        const todos = Object.assign([], this.state.todos);
        todos.push(response.data);
        this.setState({ todos });
      }).catch(error => {
        console.log(error);
    });
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
