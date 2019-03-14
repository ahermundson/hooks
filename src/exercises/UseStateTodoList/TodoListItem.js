import React from "react";

const TodoListItem = ({ todo }) => {
  return <li data-testid="list-item">{todo}</li>;
};

export default TodoListItem;
