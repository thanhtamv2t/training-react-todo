import React from "react";

class TodoItem extends React.PureComponent {
  render() {
    const { work, onClick, onRemove } = this.props;
    return (
      <li className="list-item">
        <span onClick={onClick}>{work.work}</span>
        <span onClick={onRemove}>( Xoá )</span>
      </li>
    );
  }
}

export default TodoItem;
