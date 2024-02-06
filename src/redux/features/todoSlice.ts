import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type TTodoProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialStateProps = {
  todos: TTodoProps[];
};

const initialState: TInitialStateProps = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodoProps>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
