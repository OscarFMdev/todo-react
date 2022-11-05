import React from "react"
import s from "./TodoItem.module.scss"

const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}

function TodoItem({ todo, handleChangeProps, delTodo }) {
  const { id, title, completed } = todo;
  return (
    <li className={s.item}>
      <input
        type="checkbox"
        className={s.checkbox}
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button onClick={() => delTodo(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  )
}

export default TodoItem