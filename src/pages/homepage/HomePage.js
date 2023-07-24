import { useState } from 'react';
import TodoList from '../../components/todos/TodoList';
import classes from './HomePage.module.css';
import TodoForm from '../../components/todos/TodoForm';

const HomePage = () => {
  const todosDefault = [
    {
      id: 1,
      title: "Learn React Router Dom",
      dateCreated: "23/7/2023",
      isRead: false,
    },
    {
      id: 2,
      title: "Learn Redis",
      dateCreated: "12/3/ 2023",
      isRead: true,
    },
    {
      id: 3,
      title: "Learn how to improve performance",
      dateCreated: "13/3/2023",
      isRead: false,
    },
  ];

  const [todos, setTodos] = useState(todosDefault)

  return (
    <section id={classes['home-page']}>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} />
    </section>
  )
}

export default HomePage 