import classes from "./Todos.module.css";

const Todo = ({ title, dateCreated, isRead }) => {
  return (
    <div className={classes.todo}>
      <div className={classes["todo-title"]}>{title}</div>
      <div className={classes["todo-lower"]}>
        <small>{dateCreated}</small>
          <label htmlFor="isRead" className={classes['isRead']}>
          <input type="checkbox" value={isRead} checked={isRead} id="isRead" className={classes['checkbox']} />
          Read
        </label>
      </div>
    </div>
  );
};

export default Todo;
