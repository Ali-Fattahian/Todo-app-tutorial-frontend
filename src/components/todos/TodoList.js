import Todo from "./Todo";
import classes from "./Todos.module.css";

const TodoList = () => {
  const todos = [
    {
      id: 1,
      title: "Learn React Router Dom",
      dateCreated: "23 / 7 / 2023",
      isRead: false,
    },
    {
      id: 2,
      title: "Learn Redis",
      dateCreated: "12 / 3 / 2023",
      isRead: true,
    },
  ];

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
