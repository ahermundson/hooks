import React from "react";
import uuid from "uuid";
import { getTodos } from "../api";
import TodoListForm from "../exercises/UseStateTodoList/TodoListForm";
import TodoListItem from "../exercises/UseStateTodoList/TodoListItem";

// TODO: Change from class to Functional Component
class UseEffectTodoList extends React.Component {
  state = {
    todoInputValue: "",
    todos: [],
    isLoading: false
  };

  // TODO - componentDidMount needs to be converted into a useEffect hook
  componentDidMount() {
    this.setState(
      {
        isLoading: true
      },
      async () => {
        const todos = await getTodos();
        this.setState({
          todos,
          isLoading: false
        });
      }
    );
  }

  // Create UseState or UseReducer hooks to hold component state
  handleTodoInputChange = e => {
    this.setState({
      todoInputValue: e.target.value
    });
  };

  onSubmit = () => {
    this.setState(state => {
      return {
        todos: [...state.todos, { todo: state.todoInputValue, id: uuid() }],
        todoInputValue: ""
      };
    });
  };

  // Udpate JSX to use methods created from useSTate hooks
  render() {
    const { todoInputValue, todos, isLoading } = this.state;

    if (isLoading) return "...Loading";
    return (
      <React.Fragment>
        <TodoListForm
          todoInputValue={todoInputValue}
          handleSubmit={this.onSubmit}
          handleTodoInputChange={this.handleTodoInputChange}
          header="Use State"
        />
        <ul data-testid="todo-list">
          {todos.map(({ todo, id }) => (
            <TodoListItem key={id} todo={todo} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default UseEffectTodoList;
