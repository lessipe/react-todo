import React from 'react';

export default class TypeButtons extends React.Component {
  getButtonClass(type) {
    if (this.props.type === type) {
      return 'btn-primary';
    }

    return 'btn-secondary';
  }

  changeType(type) {
    this.props.changeType(type);
  }

  render() {
    return (
      <div>
        <button type="button" className={`btn ${this.getButtonClass('all')}`} onClick={() => this.changeType('all')}>
          전체
        </button>
        &nbsp;
        <button type="button" className={`btn ${this.getButtonClass('done')}`} onClick={() => this.changeType('done')}>
          완료
        </button>
        &nbsp;
        <button type="button" className={`btn ${this.getButtonClass('notyet')}`} onClick={() => this.changeType('notyet')}>
          미완료
        </button>
      </div>
    );
  }
}
