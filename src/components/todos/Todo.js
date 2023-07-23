import classes from "./Todos.module.css";

const Todo = () => {
  return (
    <div className={classes.todo}>
      <div className={classes["todo-title"]}>Learn React Router Dom</div>
      <div className={classes["todo-lower"]}>
        <small>23 / 7 / 2023</small>
          <label htmlFor="isRead" className={classes['isRead']}>
          <input type="checkbox" value={false} id="isRead" className={classes['checkbox']} />
          Read
        </label>
      </div>
    </div>
  );
};

export default Todo;
