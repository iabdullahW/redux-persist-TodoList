// src/App.js
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{ backgroundColor: '#333', minHeight: '100vh',width: '100vh', padding: '20px', color: '#FFF' }}>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
