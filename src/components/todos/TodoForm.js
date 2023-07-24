import classes from './Todos.module.css';

const TodoForm = () => {
  return (
    <form method="POST" className={classes["todo-form"]}>
      <input type="text" />
      <button type="submit">Create</button>
    </form>
  );
};

export default TodoForm;
