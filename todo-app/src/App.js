import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
