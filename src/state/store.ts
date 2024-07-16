import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../state/todo/toDoSlice";
import counterReducer from "./counter/counterSlice";

const store = configureStore({
  reducer: {
    todos: toDoReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
