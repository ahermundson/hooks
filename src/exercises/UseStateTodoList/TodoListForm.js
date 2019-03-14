import React from "react";

const TodoListForm = ({
  handleSubmit,
  handleTodoInputChange,
  todoInputValue,
  header
}) => {
  return (
    <form
      className="login-form"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1 style={{ textAlign: "center" }}>{header}</h1>
      <div className="input-group">
        <label htmlFor="username-input">Todo</label>
        <input
          id="todo-input"
          type="text"
          placeholder="Add Todo"
          value={todoInputValue}
          onChange={handleTodoInputChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default TodoListForm;
