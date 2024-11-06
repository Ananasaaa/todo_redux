import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <footer>
        <p>Total numbers of tasks: {todos.length}</p>
      </footer>
    </div>
  );
};

export default TodoList;