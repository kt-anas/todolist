 // src/App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo,changeColor } from './redux/todoSlice';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
const [colorname,setColor] =useState('')

  const todos = useSelector((state) => state.todos.todos);
  const color = useSelector((state)=> state.todos.color);


  console.log(todos);
  const dispatch = useDispatch();
 
  const handleAddTodo = () => {
    if (inputValue) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  return (
    <div className="App">
    <input type="text" name="" id="" value={colorname} 
      onChange={(e)=>setColor(e.target.value)}
    />
  <button onClick={()=>dispatch(changeColor(colorname))}> Change</button>

    
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
            < div style={{color:color}}>
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
