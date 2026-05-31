import { useState } from "react";

function AddTodo({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTask(task);

    setTask("");
  };

  return (
    <div className="d-flex gap-2 mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
