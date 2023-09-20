import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";
import React, { useEffect } from "react";
export default function ToDOList({ todos, setTodos }) {
  function completeTodo(index) {
    const newTodos = todos.map((t, idx) =>
      idx === index ? { text: t.text, completed: !t.completed } : t
    );

    setTodos(newTodos);
  }
  const toDoListItems = todos.map((t, idx) => (
    <ToDoListItem todo={t} index={idx} key={idx} completeTodo={completeTodo} />
  ));
  // const toDoListItems = todos.map(
  //   (t, idx) =>
  //     !t.completed && (
  //       <ToDoListItem
  //         todo={t}
  //         index={idx}
  //         key={idx}
  //         completeTodo={completeTodo}
  //       />
  //     )
  // );
  return <ul className={"ToDoList"}>{toDoListItems}</ul>;
}
