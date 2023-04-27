import React from "react";
import Hoc from "./Hoc";
const TodoList = ({ data }) => {
  let todos = data.map((todo) => {
    return <div key={todo.userId}>{todo.title}</div>;
  });
  return <div className="container">{todos}</div>;
};
const TodosItems = Hoc(TodoList, "todos");
export default TodosItems;
