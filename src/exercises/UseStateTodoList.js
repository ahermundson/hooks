import React from "react";
import uuid from "uuid";
import TodoListForm from "../exercises/UseStateTodoList/TodoListForm";
import TodoListItem from "../exercises/UseStateTodoList/TodoListItem";

// TODO: Change from class to Functional Component
class UseStateTodoList extends React.Component {
  state = {
    todoInputValue: "",
    todos: []
  };

  // Create UseState hooks for username and password
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
    const { todoInputValue, todos } = this.state;

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

export default UseStateTodoList;
