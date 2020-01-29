import React from 'react';

export default class TodoList extends React.Component {
  toggleTodo(index) {
    this.props.toggleTodo(index);
  }

  renderList() {
    return this.props.todos.filter(todo => {
      if (this.props.type === 'all') {
        return true;
      } else if (this.props.type === 'done') {
        return todo.done;
      } else {
        return ! todo.done;
      }
    }).map((todo, index) => {
      let className = ['list-group-item', 'text-left'];

      if (todo.done) {
        className.push('active');
      }

      return (
        <button type="button"
          key={`todo-list-${index}-${todo}`}
          className={className.join(' ')}
          onClick={() => this.toggleTodo(index)}
        >
          { todo.label }
        </button>
      )
    });
  }

  render() {
    return (
      <div className="list-group mb-3">
        { this.renderList() }
      </div>
    );
  }
}
