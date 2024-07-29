 // src/App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './redux/todoSlice';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <h1> List</h1>
     <form action="#">
     <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add "
         
      />
      <button onClick={handleAddTodo}>Add</button>
     </form>
    
    
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} >
            <div>
              {todo.text}
            </div>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
