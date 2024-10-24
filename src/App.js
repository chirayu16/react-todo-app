// src/App.js
import React, { useState } from 'react';
import './App.css';
import TodoItem from './ToDoItem';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>React To-Do List</h1>
      <div className="input-container">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a new task..." 
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem 
            key={index} 
            todo={todo} 
            toggleComplete={() => toggleComplete(index)} 
            deleteTodo={() => deleteTodo(index)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
