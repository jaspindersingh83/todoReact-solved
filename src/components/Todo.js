import { useState } from "react";
export default function Todo({ text, completed, idx, editTask, toggleTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleClick = (e) => {
    e.preventDefault();
    let newText = e.target.value;
    setEditedText(newText);
  };
  const handleEditTask = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      editTask(idx, editedText);
      setIsEditing(false);
    }
  };
  return (
    <li className="todo__container">
      {completed ? (
        <>
          <input
            type="checkbox"
            onClick={(e) => {
              toggleTask(idx);
            }}
          />
          {!isEditing ? (
            <p className="completed" onClick={toggleEdit}>
              {text}
            </p>
          ) : (
            <input
              type="text"
              value={editedText}
              onChange={handleClick}
              onKeyUp={handleEditTask}
            ></input>
          )}
        </>
      ) : (
        <>
          <input
            type="checkbox"
            onClick={(e) => {
              toggleTask(idx);
            }}
          />
          {!isEditing ? (
            <p onClick={toggleEdit}>{text}</p>
          ) : (
            <input
              type="text"
              value={editedText}
              onChange={handleClick}
              onKeyUp={handleEditTask}
            ></input>
          )}
        </>
      )}
    </li>
  );
}
