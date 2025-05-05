import React from 'react'
import RemoveImage from "../assets/remove.png";


const TodoItem = ({id, text, checked, onToggle, onDelete}) => {
  return (
    <div className = "todo_list">
      <div className="added_text">
        <input className="checkbox" onChange = {() => onToggle(id)} type="checkbox" id={`check${id}`} checked={checked}/>
        <p style={{textDecoration:checked? 'line-through' : 'none'}}>{text}</p>
      </div>
      <button className="removeImage" onClick ={() => onDelete(id)}>
        <img src={RemoveImage} alt="삭제 버튼"/>
      </button>
    </div>
  )
}

export default TodoItem
