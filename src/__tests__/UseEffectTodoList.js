import React from "react";
import { render, fireEvent } from "react-testing-library";
import UseEffectTodoList from "../exercises/UseEffectTodoList";
import * as api from "../api";
import { flushPromise } from "../testUtils";

jest.mock("../api", () => ({
  getTodos: jest.fn(() => Promise.resolve([{ todo: "test", id: 1 }]))
}));

test("Can add todo", async () => {
  const { container, getByPlaceholderText, getByText, getByTestId } = render(
    <UseEffectTodoList />
  );

  await flushPromise();
  expect(api.getTodos).toHaveBeenCalledTimes(1);

  const todoInput = getByPlaceholderText("Add Todo");
  const submitButton = getByText("Submit");

  fireEvent.change(todoInput, { target: { value: "todo" } });
  expect(todoInput.value).toBe("todo");
  fireEvent.click(submitButton);
  const listElement = getByTestId("list-item");
  expect(listElement.innerHTML).toBe("test");

  expect(api.getTodos).toHaveBeenCalledTimes(1);

  expect(container).toMatchSnapshot();
});
