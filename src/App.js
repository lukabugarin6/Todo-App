import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="todo-app bg-primary min-h-screen w-full flex justify-center text-tertiary px-4 pt-20 md:pt-48">
      <div className="todo-app__wrapper w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 bg-secondary px-10 pt-10 pb-6 flex flex-col text-xs lg:text-sm  2xl:text-xl self-start min-h-75 md:min-h-100 lg:min-h-75 2xl:min-h-100">
        <TodoForm
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
        {todos.length > 0 && (
          <button className="transition-all duration-300 bg-tertiary text-quinary ml-auto p-2 text-xs 2xl:text-sm font-semibold mt-auto transform hover:text-primary" onClick={()=>setTodos([])}>
            Clear all
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
