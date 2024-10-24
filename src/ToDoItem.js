// src/TodoItem.js
import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="todo-item">
      <span 
        className={todo.completed ? 'completed' : ''} 
        onClick={toggleComplete}
      >
        {todo.text}
      </span>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default TodoItem;
