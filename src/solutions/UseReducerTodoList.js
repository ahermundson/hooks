import React from "react";
import uuid from "uuid";
import TodoListForm from "../exercises/UseStateTodoList/TodoListForm";
import TodoListItem from "../exercises/UseStateTodoList/TodoListItem";

const UseReducerTodoList = () => {
  // TODO: Replace useState with useReducer. HINT: React.useReducer expects a reducer function and an initial state
  const initialState = {
    todoInputValue: "",
    todos: []
  };

  function reducer(state, action) {
    switch (action.type) {
      case "HANDLE_TODO_INPUT_CHANGE":
        return {
          ...state,
          todoInputValue: action.payload
        };
      case "ADD_TODO":
        return {
          todoInputValue: "",
          todos: [...state.todos, { todo: state.todoInputValue, id: uuid() }]
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState);

  // Replace function calls with dispatches
  function handleTodoInputChange(e) {
    dispatch({ type: "HANDLE_TODO_INPUT_CHANGE", payload: e.target.value });
  }

  function onSubmit() {
    dispatch({ type: "ADD_TODO" });
  }

  return (
    <React.Fragment>
      <TodoListForm
        todoInputValue={state.todoInputValue}
        handleSubmit={onSubmit}
        handleTodoInputChange={handleTodoInputChange}
        header="Use Reducer"
      />
      <ul data-testid="todo-list">
        {state.todos.map(({ todo, id }) => (
          <TodoListItem key={id} todo={todo} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default UseReducerTodoList;
