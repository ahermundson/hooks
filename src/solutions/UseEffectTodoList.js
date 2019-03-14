import React from "react";
import uuid from "uuid";
import { getTodos } from "../api";
import TodoListForm from "../exercises/UseStateTodoList/TodoListForm";
import TodoListItem from "../exercises/UseStateTodoList/TodoListItem";

// TODO: Change from class to Functional Component
const UseEffectTodoList = () => {
  const initialState = {
    todoInputValue: "",
    todos: [],
    isLoading: false
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
      case "TOGGLE_IS_LOADING":
        return {
          ...state,
          isLoading: !state.isLoading
        };
      case "SET_TODOS_FROM_API": {
        return {
          ...state,
          todos: action.payload,
          isLoading: false
        };
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState);

  // TODO - componentDidMount needs to be converted into a useEffect hook
  React.useEffect(() => {
    dispatch({ type: "TOGGLE_IS_LOADING" });
    async function getTodosFetch() {
      const todos = await getTodos();
      dispatch({ type: "SET_TODOS_FROM_API", payload: todos });
    }
    getTodosFetch();
  }, []);

  function onSubmit() {
    dispatch({ type: "ADD_TODO" });
  }

  // Udpate JSX to use methods created from useSTate hooks

  if (state.isLoading) return "Loading...";
  return (
    <React.Fragment>
      <TodoListForm
        todoInputValue={state.todoInputValue}
        handleSubmit={onSubmit}
        handleTodoInputChange={e =>
          dispatch({
            type: "HANDLE_TODO_INPUT_CHANGE",
            payload: e.target.value
          })
        }
        header="Use State"
      />
      <ul data-testid="todo-list">
        {state &&
          state.todos.map(({ todo, id }) => (
            <TodoListItem key={id} todo={todo} />
          ))}
      </ul>
    </React.Fragment>
  );
};

export default UseEffectTodoList;
