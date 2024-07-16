import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { addTodo, removeTodo } from "../state/todo/toDoSlice";
import { FaTrashAlt } from "react-icons/fa";

const ToDoApp: React.FC = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state: RootState) => state.todos.todos); // Access the todos state correctly
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 gap-4">
      <h2 className="text-xl">To-Do List Example</h2>
      <input
        className="rounded-lg p-2"
        placeholder="what's on your to do list?"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-slate-500 p-1 rounded-lg text-white hover:border-slate-800 hover:border-solid border-2 border-slate-300"
        onClick={handleAddTodo}
      >
        Add To List
      </button>
      <div className="mt-4">To Do List:</div>
      <ul className="mt-8 mb-8">
        {todos.map((todo) => (
          <li className="text-2xl w-[200px] flex justify-between" key={todo.id}>
            {todo.text}
            <button
              className="ml-5"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
