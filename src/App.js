import { useState } from "react";
import "./styles.css";
import ToDOList from "./ToDoList";
import NewToDoForm from "./NewToDoForm";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "Have Fun", completed: false },
    { text: "Learn React", completed: true },
    { text: "Learn the MERN-Stack", completed: false }
  ]);
  const [showTodos, setShowToDos] = useState(true);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <h1>React To-Do</h1>
      <button onClick={() => setShowToDos(!showTodos)}>
        {showTodos ? "HIDE" : "SHOW"}{" "}
      </button>
      {showTodos && <ToDOList todos={todos} setTodos={setTodos} />}
      <hr />
      <NewToDoForm addTodo={addTodo} />
    </div>
  );
}
