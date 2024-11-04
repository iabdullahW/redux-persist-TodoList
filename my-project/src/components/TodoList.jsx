// src/components/TodoList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodo } from '../features/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul style={{ color: '#FFF' }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' ,padding: '7px'}}>
         <div style={{ display: 'flex', gap: '20px', alignItems: 'center'}}>
         <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
         <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
         </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
