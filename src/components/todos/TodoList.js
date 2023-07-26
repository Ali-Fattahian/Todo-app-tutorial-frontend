import Todo from "./Todo";
import classes from "./Todos.module.css";

const TodoList = ({ todos, shortHeight }) => {

  return (
    <section id={classes["todo-list"]} className={shortHeight && `${classes['todo-list--short-height']}`}>
      {todos.map((todo) => (
        <Todo
          id={todo.id}
          key={todo.id}
          title={todo.title}
          dateCreated={todo.date_created}
          isRead={todo.is_read}
        />
      ))}
    </section>
  );
};

export default TodoList;
