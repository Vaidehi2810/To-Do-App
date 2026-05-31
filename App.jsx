import { useState } from "react";

import AddTodo from "./assets/Component/AddTodo";
import Todoitems from "./assets/Component/Todoitems";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Learn React",
    },

    {
      id: 2,
      task: "Build Todo App",
    },
  ]);

  // ADD TODO
  const addTask = (newTask) => {
    if (newTask.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      task: newTask,
    };

    setTodos([...todos, newTodo]);
  };

  // DELETE TODO
  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4">Todo App</h1>

        <AddTodo addTask={addTask} />

        <Todoitems todos={todos} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
