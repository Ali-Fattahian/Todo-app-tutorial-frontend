import { useEffect, useState } from 'react';
import TodoList from '../../components/todos/TodoList';
import classes from './HomePage.module.css';
import TodoForm from '../../components/todos/TodoForm';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:8000/api/todo-list', {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}` 
      }
    })

    const data = await response.json()
    setTodos(data)
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/login')

    fetchTodos()
  }, [])

  return (
    <>
    <Navbar />
    <section id={classes['home-page']}>
      <TodoForm />
      {todos && <TodoList todos={todos} shortHeight />}
    </section>
    </>
  )
}

export default HomePage 