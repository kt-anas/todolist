// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  color:"blue"
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        const todo = state.todos;
      state.todos.push({ id: todo.length, text: action.payload ,color:state.color});
    },
     
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
   changeColor:(state,action)=>{
       state.color=action.payload
   }
    
  },
});

export const { addTodo, deleteTodo,changeColor } = todoSlice.actions;
export default todoSlice.reducer;
