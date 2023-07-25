import { useState } from "react";
import classes from "./Todos.module.css";

const Todo = ({ title, dateCreated, isRead }) => {
  const [todoIsRead, setTodoIsRead] = useState(isRead)

  return (
    <div className={classes.todo}>
      <div className={classes["todo-title"]}>{title}</div>
      <div className={classes["todo-lower"]}>
        <small>{dateCreated.slice(0, 10)}</small>
          <label htmlFor="isRead" className={classes['isRead']}>
          <input type="checkbox" checked={todoIsRead} id="isRead" className={classes['checkbox']} onChange={() => setTodoIsRead(!todoIsRead)} />
          Read
        </label>
      </div>
    </div>
  );
};

export default Todo;
