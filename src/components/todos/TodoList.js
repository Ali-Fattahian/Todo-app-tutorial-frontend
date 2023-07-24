import Todo from "./Todo";
import classes from "./Todos.module.css";

const TodoList = ({ todos }) => {

  return (
    <section id={classes["todo-list"]}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          dateCreated={todo.dateCreated}
          isRead={todo.isRead}
        />
      ))}
    </section>
  );
};

export default TodoList;
