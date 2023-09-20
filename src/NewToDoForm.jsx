import { useState } from "react";
export default function NewToDoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState({
    text: "",
    completed: false
  });
  function handleChange(evt) {
    const newFormData = { ...newTodo, [evt.target.name]: evt.target.value };
    setNewTodo(newFormData);
  }
  function handleAddTodo(evt) {
    evt.preventDefault();
    addTodo(newTodo);
    setNewTodo({ text: "", completed: false });
  }

  return (
    <>
      <h2>New To-Do</h2>
      <form onSubmit={handleAddTodo}>
        <input
          name="text"
          value={newTodo.text}
          onChange={handleChange}
          placeholder="New To-Do"
          required
          pattern=".{4,}"
        />
        <button type="submit">Add To-Do</button>
        {/* <button onClick={handleAddTodo}>Add To-Do</button> */}
      </form>
    </>
  );
}
