import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    completeTodo: (state, action) => {
      const targetTodo = state.find((todo) => todo.id === action.payload);
      targetTodo.isCompleted = !targetTodo.isCompleted;
    },
    deleteTodo: (state, action) => {
      state.splice(
        state.findIndex((todo) => todo.id === action.payload),
        1
      );
    },
    clearCompletedTodos: (state, action) => {
      return state.filter((todo) => !todo.isCompleted);
    },
  },
});

export const { addTodo, completeTodo, deleteTodo, clearCompletedTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
