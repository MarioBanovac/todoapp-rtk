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
    deleteTodo: (state, action) => {
      state.splice(
        state.findIndex((todo) => todo.id === action.payload),
        1
      );
    },
  },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
