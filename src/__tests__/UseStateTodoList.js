import React from "react";
import { render, fireEvent } from "react-testing-library";
import UseStateTodoList from "../exercises/UseStateTodoList";
// import UseStateTodoList from "../solutions/UseStateTodoList";

test("Can add todo", () => {
  const fakeSubmit = jest.fn(() => {});
  const { container, getByPlaceholderText, getByText } = render(
    <UseStateTodoList onSubmit={fakeSubmit} />
  );
  const todoInput = getByPlaceholderText("Add Todo");
  const submitButton = getByText("Submit");

  fireEvent.change(todoInput, { target: { value: "todo" } });
  expect(todoInput.value).toBe("todo");
  fireEvent.click(submitButton);

  expect(container).toMatchSnapshot();
});
