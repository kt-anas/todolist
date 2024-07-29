 
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counter';
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

 
  return (
    <div className="App">
        <button onClick={()=>dispatch(increment())}>+</button>
           <div>{count}</div>
       <button onClick={()=>dispatch(decrement())}>-</button>
       


      
    </div>
  );
}

export default App;
