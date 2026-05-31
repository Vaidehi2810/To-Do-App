import Todoitem from "./Todoitem";

function Todoitems({ todos, deleteTask }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default Todoitems;
