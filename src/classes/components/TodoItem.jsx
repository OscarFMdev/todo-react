import React, { useEffect, useState } from "react"
import s from "./TodoItem.module.scss"

const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}

function TodoItem({ todo, handleChangeProps, delTodo, setUpdate }) {
  const [state, setState] = useState(false);
  const { id, title, completed } = todo;
  const handleEditing = () => {
    setState(
      {
        editing: true
      }
    )
  }

  useEffect(() => {

    return () => {
      console.log('Cleaning up...')
    }
  }, [])
  

  
  let viewMode = {}
  let editMode = {}
  
  if (state.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setState({ editing: false })
    }
  }

  return (
    <li className={s.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
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
      </div>
      <input 
        type="text" 
        style={editMode} 
        className={s.textInput}
        value={title}
        onChange={({ target }) => {
          setUpdate(target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem