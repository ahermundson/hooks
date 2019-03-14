import React from "react";
import { render, fireEvent } from "react-testing-library";
import UseReducerTodoList from "../exercises/UseReducerTodoList";
// import UseReducerTodoList from "../solutions/UseReducerTodoList";

test("Can add a todo item - UseReducerTodoList", () => {
  const { container, getByPlaceholderText, getByText } = render(
    <UseReducerTodoList />
  );
  const todoInput = getByPlaceholderText("Add Todo");
  const submitButton = getByText("Submit");

  fireEvent.change(todoInput, { target: { value: "todo" } });
  expect(todoInput.value).toBe("todo");
  fireEvent.click(submitButton);
  expect(todoInput.value).toBe("");

  expect(container).toMatchSnapshot();
});
