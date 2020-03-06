import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../actions";

class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ''
    };
  }

  buttonClicked() {
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  addTodo: label => dispatch(addTodo(label))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInput);
