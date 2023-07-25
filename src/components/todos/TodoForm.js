import { useRef } from "react";
import classes from "./Todos.module.css";

const TodoForm = () => {
  const todoInputRef = useRef();

  const sendData = async (title) => {
    const response = await fetch("http://localhost:8000/api/todo-list", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });

    if (response.status !== 201) {
      console.log("An error occured while making a new todo"); // We are going to show an error later
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const input = todoInputRef.current.value.trim(); // Input without any white spaces
    if (input.length !== 0) {
      sendData(input);
    } else {
      console.log("Input must not be empty!");
    }
  };

  return (
    <form
      method="POST"
      className={classes["todo-form"]}
      onSubmit={formSubmitHandler}
    >
      <input type="text" ref={todoInputRef} />
      <button type="submit">Create</button>
    </form>
  );
};

export default TodoForm;
