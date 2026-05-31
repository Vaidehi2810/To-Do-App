function Todoitem({ todo, deleteTask }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.task}

      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTask(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Todoitem;
