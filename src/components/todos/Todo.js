import { useState } from "react";
import classes from "./Todos.module.css";

const Todo = ({ id, title, dateCreated, isRead }) => {
  const [todoIsRead, setTodoIsRead] = useState(isRead);

  const changeTodoIsRead = async () => {
    if (!todoIsRead) { // If is_read is false, We make it true
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
    </div>
  );
};

export default Todo;
