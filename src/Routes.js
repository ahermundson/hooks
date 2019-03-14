import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UseStateTodoList from "./exercises/UseStateTodoList";
import UseReducerTodoList from "./exercises/UseReducerTodoList";
import UseEffectTodoList from "./solutions/UseEffectTodoList";

function onLoginSubmit({ username, password }) {
  console.log(username);
  console.log(password);
}

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <UseStateTodoList onSubmit={onLoginSubmit} />}
        />
        <Route exact path="/use-reducer" component={UseReducerTodoList} />
        <Route exact path="/use-effect" component={UseEffectTodoList} />
      </Switch>
    </Router>
  );
};
export default Routes;
