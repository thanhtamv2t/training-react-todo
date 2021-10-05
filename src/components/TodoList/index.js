import React from "react";
import TodoItem from "../TodoItem";

class TodoList extends React.PureComponent {
  renderWork() {
    const { list, onClickItem,onRemoveItem } = this.props;
    return list.map((work) => (
      <TodoItem
        onClick={() => onClickItem(work.id)}
        onRemove={() => onRemoveItem(work.id)}
        work={work}
        key={work.id}
      />
    ));
  }

  render() {
    const { title } = this.props;
    return (
      <div className="todo-list-wrapper">
        <h2>{title}</h2>
        <ul>{this.renderWork()}</ul>
      </div>
    );
  }
}

export default TodoList;
