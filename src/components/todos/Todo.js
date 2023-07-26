import { useState } from "react";
import classes from "./Todos.module.css";
import Message from "../message/Message";

const Todo = ({ id, title, dateCreated, isRead, setRefresh }) => {
  const [todoIsRead, setTodoIsRead] = useState(isRead);
  const [message, setMessage] = useState(null);

  const deleteTodo = async () => {
    await fetch(`http://localhost:8000/api/delete-todo/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 204) setRefresh(Date.now());
      })
      .catch(() => {
        setMessage("Make sure you are logged in and try again!");
      });
  };

  const closeMessage = () => {
    setMessage(null);
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
      } catch {
        setMessage("Make sure you are logged in and try again!");
      }
    } else {
      try {
        await fetch(`http://localhost:8000/api/unread-todo/${id}`, {
          method: "PUT",
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });
      } catch {
        setMessage("Make sure you are logged in and try again!");
      }
    }
  };

  return (
    <div className={classes.todo}>
      <div className={classes["todo-title"]}>{title}</div>
      {message && <Message message={message} closeMessage={closeMessage} />}
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
