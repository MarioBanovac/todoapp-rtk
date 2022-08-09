import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    text: "Buy milk",
    id: Math.random(),
    isActive: true,
    isCompleted: false,
  },
  {
    text: "Learn programming",
    id: Math.random(),
    isActive: true,
    isCompleted: false,
  },
];

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
  },
});

export const { addTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
