import React from 'react';

export default class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ''
    };
  }

  buttonClicked() {
    if (this.state.todo === '') {
      alert('값을 입력하세요.');
      return;
    }

    this.props.addTodo(this.state.todo);

    this.setState({
      todo: ''
    });
  }

  render() {
    return (
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          value={this.state.todo}
          onChange={v => this.setState({todo: v.target.value})}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={this.buttonClicked.bind(this)}
          >
            추가
          </button>
        </div>
      </div>
    );
  }
}
