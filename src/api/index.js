import uuid from "uuid";

export const getTodos = () => {
  return Promise.resolve([
    {
      todo: "Test",
      id: uuid()
    }
  ]);
};

export const addTodo = () => {};
