import React from "react";
import uuid from "uuid";
import TodoListForm from "../exercises/UseStateTodoList/TodoListForm";
import TodoListItem from "../exercises/UseStateTodoList/TodoListItem";

// TODO: Change from class to Functional Component
const UseStateTodoList = () => {
  const [todoInputValue, updateTodoInputValue] = React.useState("");
  const [todos, updateTodos] = React.useState([]);

  // Create UseState hooks for username and password
  function handleTodoInputChange(e) {
    updateTodoInputValue(e.target.value);
  }

  function onSubmit() {
    updateTodos([...todos, { todo: todoInputValue, id: uuid() }]);
    updateTodoInputValue("");
  }

  // Udpate JSX to use methods created from useSTate hooks
  return (
    <React.Fragment>
      <TodoListForm
        todoInputValue={todoInputValue}
        handleSubmit={onSubmit}
        handleTodoInputChange={handleTodoInputChange}
        header="Use State"
      />
      <ul data-testid="todo-list">
        {todos.map(({ todo, id }) => (
          <TodoListItem key={id} todo={todo} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default UseStateTodoList;
