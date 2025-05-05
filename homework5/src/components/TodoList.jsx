import React from 'react'
import Plus from "../assets/plus.png";
import TodoItem from './TodoItem';
import { useState } from 'react';

const TodoList = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleAdd = () => {
    if(input.length < 1) {
        alert("할 일을 입력해주세요!");
        return;
    }
    const newTodo = {id:nextId, text:input, checked:false};
    setTodos([...todos, newTodo]);
    setInput("");
    setNextId(nextId+1);
  }

  const handleToggle = (id) => {
    setTodos(
        todos.map((todo) => todo.id === id? {...todo, checked:!todo.checked} : todo)
    )
  }

  const handleDelete =(id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <header>
        <div className="title">TO-DO-LIST</div>
        <div className="add">
            <input className = "input_text" onChange = {(e) => setInput(e.target.value)}type="text" value={input} placeholder='오늘 할 일을 입력해주세요!'/>
            <img className = "plus_img" onClick = {handleAdd} src={Plus} alt="추가 버튼"/>
        </div>
      </header>
      <main id="main">
        <div className="todo_container">
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    checked = {todo.checked}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                />
            ))}
        </div>
      </main>
    </div>
  )
}

export default TodoList
