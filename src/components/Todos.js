import { useState, useEffect } from "react";
import "./style.css";
import Todo from "./Todo";
const Todos = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? [...JSON.parse(localStorage.getItem("todos"))]
      : []
  );
  let [newTodo, setNewTodo] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleClick = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      addTask();
    } else {
      newTodo = e.target.value;
      setNewTodo(newTodo);
    }
  };
  const addTask = () => {
    const newTodos = [...todos, { text: newTodo.trim(), completed: false }];
    setTodos(newTodos);
    setNewTodo("");
  };
  const editTask = (idx, newText) => {
    let newTodos = [...todos];
    newTodos[idx].text = newText;
    setTodos(newTodos);
  };
  const deleteAll = () => {
    setTodos([]);
  };
  const toggleTask = (idx) => {
    let newTodos = [...todos];
    newTodos[idx].completed = !newTodos[idx].completed;
    setTodos(newTodos);
  };
  return (
    <div className="todo">
      <h2>To do list</h2>
      <div className="input__container">
        <input
          value={newTodo}
          className="input__field"
          onChange={handleClick}
          onKeyUp={handleClick}
        ></input>
        <button className="btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="scroll">
        {todos.map((todo, idx) => (
          <Todo
            key={idx}
            idx={idx}
            text={todo.text}
            completed={todo.completed}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))}
      </ul>
      <div className="counter__container">
        <p>
          <span className="counter">{todos.length} </span>
          Items Total
        </p>
        <button id="delete__button" onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Todos;
