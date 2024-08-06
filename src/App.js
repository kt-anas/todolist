 // src/App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo,colors } from './redux/todoSlice';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [flag,setFlag]  = useState(false);
  

  const todos = useSelector((state) => state.todos.todos);
  
  const color1 = useSelector((state)=> state.todos.Color1);
  const color2 = useSelector((state)=> state.todos.Color2);

 
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
            < div >
              {todo.text}
            </div> 
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
 
        <div onClick={()=>{setFlag(!flag);dispatch(colors(flag))}} style={{backgroundColor:color1, width:'100px', height:'100px'}}>first</div>
        <div onClick={()=>{setFlag(!flag);dispatch(colors(flag))}} style={{backgroundColor:color2, width:'100px', height:'100px'}}>second</div>


    </div>
  );
}

export default App;
