import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the interface for a single to-do item
interface Todo {
  id: number;
  text: string;
}

// Define the initial state interface
interface TodoState {
  todos: Todo[];
}

// Define the initial state
const initialState: TodoState = {
  todos: [],
};

// Create the slice
const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(), // Unique id based on timestamp
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export the actions
export const { addTodo, removeTodo } = toDoSlice.actions;

// Export the reducer
export default toDoSlice.reducer;
