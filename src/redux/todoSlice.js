// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  color:"black",
  Color1:'green',
  Color2:'blue',
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
 

    colors:(state,action)=>{
        state.Color1=  action.payload ? 'blue':'green'
        state.Color2= action.payload ? 'green':'blue'
    },
    
  },
});

export const { addTodo, deleteTodo,colors } = todoSlice.actions;
export default todoSlice.reducer;
