import "./ToDoListItem.css";
export default function ToDoListItem({ todo, index, completeTodo }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    completeTodo(index);
  }
  if (todo.completed) return "";
  return (
    <li
      className={"ToDoListItem"}
      style={{
        backgroundColor: index % 2 ? "lavender" : "plum",
        display: "flex"
      }}
    >
      <div className="flex-ctr-ctr">{index + 1}</div>
      <span style={{ textDecoration: todo.completed && "line-through" }}>
        {todo.text}
      </span>
      <form onSubmit={handleSubmit}>
        <button type="submit">{todo.completed ? "❌ " : "✔️"}</button>
      </form>
    </li>
  );
}
