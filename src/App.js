import React from 'react';
import './App.css';

import AppHeader from "./components/AppHeader";
import UserInput from "./components/UserInput";
import TodoList from "./components/TodoList";
import TypeButtons from "./components/TypeButtons";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      type: 'all',
      todos: []
    };
  }

  addTodo(todo) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          label: todo,
          done: false
        }
      ]
    })
  }

  toggleTodo(index) {
    const todos = this.state.todos;

    todos[index].done = ! todos[index].done;

    this.setState({
      todos
    });
  }

  changeType(type) {
    this.setState({
      type
    });
  }

  render() {
    return (
      <div className="container">
        <AppHeader />
        <UserInput
          addTodo={this.addTodo.bind(this)}
        />
        <TodoList
          todos={this.state.todos}
          type={this.state.type}
          toggleTodo={this.toggleTodo.bind(this)}
        />
        <TypeButtons
          type={this.state.type}
          changeType={this.changeType.bind(this)}
        />
      </div>
    );
  }
}
