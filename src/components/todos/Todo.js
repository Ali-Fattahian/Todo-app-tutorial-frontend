import { useState } from "react";
import classes from "./Todos.module.css";

const Todo = ({ id, title, dateCreated, isRead, setRefresh }) => {
  const [todoIsRead, setTodoIsRead] = useState(isRead);

  const deleteTodo = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/delete-todo/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 204) setRefresh(Date.now())
    } catch (err) {
      console.log(err);
    }
  };

  const changeTodoIsRead = async () => {
    if (!todoIsRead) {
      // If is_read is false, We make it true
      try {
        await fetch(`http://localhost:8000/api/read-todo/${id}`, {
          method: "PUT",
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await fetch(`http://localhost:8000/api/unread-todo/${id}`, {
          method: "PUT",
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className={classes.todo}>
      <div className={classes["todo-title"]}>{title}</div>
      <div className={classes["todo-lower"]}>
        <small>{dateCreated.slice(0, 10)}</small>
        <label htmlFor={`isRead-${id}`} className={classes["isRead"]}>
          <input
            type="checkbox"
            checked={todoIsRead}
            id={`isRead-${id}`}
            className={classes["checkbox"]}
            onChange={() => {
              setTodoIsRead(!todoIsRead);
              changeTodoIsRead();
            }}
          />
          Read
        </label>
      </div>
      <button type="submit" onClick={() => deleteTodo()}>
          Delete
        </button>
    </div>
  );
};

export default Todo;
