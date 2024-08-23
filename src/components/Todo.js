import "./style.css";

export default function Todo({ name, completed, index, editTask }) {
  return (
    <>
      {!completed ? (
        <li onClick={() => editTask(index)}> {name}</li>
      ) : (
        <li onClick={() => editTask(index)} className="disabled">
          {name}
        </li>
      )}
    </>
  );
}
