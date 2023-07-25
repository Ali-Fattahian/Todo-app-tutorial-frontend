import { useEffect, useState } from 'react';
import TodoList from '../../components/todos/TodoList';
import classes from './HomePage.module.css';
import TodoForm from '../../components/todos/TodoForm';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()
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

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/login')
  }, [])

  return (
    <>
    <Navbar />
    <section id={classes['home-page']}>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} shortHeight />
    </section>
    </>
  )
}

export default HomePage 