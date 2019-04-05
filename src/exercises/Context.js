import React from "react";

const TodoContext = React.createContext();

class TodoContextProvider extends React.Component {
  addTodo = todoToAdd => {
    this.setState(({ todos }) => ({
      todos: [...todos, todoToAdd]
    }));
  };
  state = {
    todos: [],
    addTodo: this.addTodo
  };

  render() {
    const { children } = this.props;
    return (
      <TodoContext.Provider value={this.state}>{children}</TodoContext.Provider>
    );
  }
}

const TodoContextConsumer = TodoContext.Consumer;

export { TodoContextConsumer, TodoContextProvider, TodoContext };
