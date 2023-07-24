import { useRef } from "react";
import classes from "./Todos.module.css";

const TodoForm = ({ setTodos }) => {
  const todoInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const input = todoInputRef.current.value.trim(); // Input without any white spaces
    if (input.length !== 0) {
      
      const todo = {
        id: Math.random()*10, // Not secure but it will do the job for now
        title: input,
        dateCreated: new Date().toLocaleDateString(),
        isRead: false
      }

      setTodos((prevState) => {
        return [...prevState, todo];
      });
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
