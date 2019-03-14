import React from "react";
import uuid from "uuid";
import TodoListForm from "./UseStateTodoList/TodoListForm";
import TodoListItem from "./UseStateTodoList/TodoListItem";

const UseReducerTodoList = () => {
  // TODO: Replace useState with useReducer. HINT: React.useReducer expects a reducer function and an initial state
  const [todoInputValue, updateTodoInputValue] = React.useState("");
  const [todos, updateTodos] = React.useState([]);

  // Replace function calls with dispatches
  function handleTodoInputChange(e) {
    updateTodoInputValue(e.target.value);
  }

  function onSubmit() {
    updateTodos([...todos, { todo: todoInputValue, id: uuid() }]);
    updateTodoInputValue("");
  }

  return (
    <React.Fragment>
      <TodoListForm
        todoInputValue={todoInputValue}
        handleSubmit={onSubmit}
        handleTodoInputChange={handleTodoInputChange}
        header="Use Reducer"
      />
      <ul data-testid="todo-list">
        {todos.map(({ todo, id }) => (
          <TodoListItem key={id} todo={todo} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default UseReducerTodoList;
