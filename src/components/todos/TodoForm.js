import { useRef, useState } from "react";
import classes from "./Todos.module.css";
import Message from "../message/Message";

const TodoForm = ({ setRefresh }) => {
  const todoInputRef = useRef();
  const [message, setMessage] = useState(null)

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
      setMessage("An error occured while making a new todo"); // We are going to show an error later
    }

    if (response.status === 201) setRefresh(Date.now())
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const input = todoInputRef.current.value.trim(); // Input without any white spaces
    if (input.length !== 0) {
      sendData(input);
    } else {
      setMessage("Input must not be empty!");
    }
  };

  const closeMessage = () => {
    setMessage(null)
  }

  return (
    <form
      method="POST"
      className={classes["todo-form"]}
      onSubmit={formSubmitHandler}
    >
      <input type="text" ref={todoInputRef} />
      <button type="submit">Create</button>
      {message && <Message closeMessage={closeMessage} message={message} />}
    </form>
  );
};

export default TodoForm;
