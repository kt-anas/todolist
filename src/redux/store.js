import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";

 export const store = configureStore({
    reducer: {
        counter: counterSlice, 
    }
});