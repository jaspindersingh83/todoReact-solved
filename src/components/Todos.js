import { useState, useEffect } from "react";
import Todo from "./Todo";
import "./style.css";

export default function Todos() {
  let [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    ...JSON.parse(localStorage.getItem("todos")),
  ]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    let newTodos = [...todos, { name: newTodo, completed: false }];
    setTodos(newTodos);
    setNewTodo("");
  };
  const handleInput = (e) => {
    e.preventDefault();
    newTodo = e.target.value;
    setNewTodo(newTodo);
  };
  const deleteAll = () => {
    setTodos([]);
  };
  const editTask = (idx) => {
    let newTodos = [...todos];
    let taskToEdit = newTodos[idx];
    taskToEdit.completed = !taskToEdit.completed;
    setTodos(newTodos);
  };
  return (
    <div className="todo-container">
      <h2>To Do List</h2>
      <div className="input-container">
        <input
          type="text"
          className="add-task"
          value={newTodo}
          onChange={handleInput}
          placeholder="Add Task Here"
        />
        <button className="btn" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="scroll">
        {todos.map((todo, idx) => (
          <Todo
            key={idx}
            index={idx}
            name={todo.name}
            completed={todo.completed}
            editTask={editTask}
          />
        ))}
      </ul>
      <hr className="counter"></hr>
      <div className="counter-container">
        <p>{todos.length + " Items Total"}</p>
        <button className="btn" id="delete-button" onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
}
