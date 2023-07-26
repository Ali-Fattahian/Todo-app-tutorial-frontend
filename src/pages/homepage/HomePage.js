import { useEffect, useState } from 'react';
import TodoList from '../../components/todos/TodoList';
import classes from './HomePage.module.css';
import TodoForm from '../../components/todos/TodoForm';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Message from '../../components/message/Message';

const HomePage = () => {
  const navigate = useNavigate()
  const [todos, setTodos] = useState([])
  const [refresh, setRefresh] = useState(null)

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/todo-list', {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}` 
      }
    })

    const data = await response.json()
    setTodos(data)
    } catch (err) {
      console.log(err)
    }
    
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/login')

    fetchTodos()
  }, [refresh])

  return (
    <>
    <Navbar />
    <section id={classes['home-page']}>
      <TodoForm setRefresh={setRefresh} />
      <Message message={'An error has occured'} />
      {todos && <TodoList todos={todos} shortHeight />}
    </section>
    </>
  )
}

export default HomePage 