import Todo from './Todo';
import classes from './Todos.module.css';

const TodoList = () => {
  return (
    <section id={classes['todo-list']}>
        <Todo />
    </section>
  )
}

export default TodoList