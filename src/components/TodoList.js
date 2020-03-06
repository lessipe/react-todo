import React from 'react';
import {connect} from "react-redux";
import {toggleTodo} from "../actions";

class TodoList extends React.Component {
  toggleTodo(id) {
    this.props.toggleTodo(id);
  }

  renderList() {
    return this.props.todos.map((todo, index) => {
      let className = ['list-group-item', 'text-left'];

      if (todo.done) {
        className.push('active');
      }

      return (
        <button type="button"
          key={`todo-list-${index}-${todo}`}
          className={className.join(' ')}
          onClick={() => this.toggleTodo(todo.id)}
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

const filteredTodo = (todos, type) => {
  if (type === 'all') {
    return todos;
  } else if (type === 'done') {
    return todos.filter(todo => todo.done);
  } else {
    return todos.filter(todo => ! todo.done);
  }
};

const mapStateToProps = state => ({
  todos: filteredTodo(state.todos.todos, state.todos.type)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
