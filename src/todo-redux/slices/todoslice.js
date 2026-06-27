import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    todos : []
}
const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTodo : (state, action) => {state.todos.push(action.payload)},
        removeTodo : (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        markComplete : (state, action) => {
            const selected = state.todos.find(todo => todo.id == action.payload);
            if(selected)
                selected.isCompleted = ! selected.isCompleted;
        }
    }
})


export const {addTodo, removeTodo, markComplete} = todoSlice.actions;
export default todoSlice.reducer;