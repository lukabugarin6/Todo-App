import React from "react";
import uuid from "react-uuid";

const TodoForm = ({ inputText, todos, setInputText, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText,completed: false ,id: uuid() }]);
    setInputText("");
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex gap-x-2 xl:gap-x-4 h-8 xl:h-10 2xl:h-12">
      <input
        value={inputText}
        onChange={inputTextHandler}
        className="w-3/4 xl:w-5/6 px-4 "
        placeholder="Enter your task here"
        type="text"
      />
      <button
        className="bg-quinary transition-all duration-300 text-tertiary text-sm flex-grow text-3xl inline-flex justify-center items-center hover:bg-quaternary"
        type="submit"
      >
        +
      </button>
    </form>
  );
};

export default TodoForm;
