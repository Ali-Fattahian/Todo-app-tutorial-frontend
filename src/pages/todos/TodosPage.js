import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import TodoList from "../../components/todos/TodoList";
import classes from "./Todos.module.css";
import Message from "../../components/message/Message";

const TodosPage = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState(null);
  const [message, setMessage] = useState(null);

  const fetchAllTodos = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/todo-list", {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      setTodos(data);
    } catch {
      setMessage("There was a problem fetching your todos, Please try again!");
    }
  };

  const fetchFinishedTodos = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/todo-list-finished",
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();
      setTodos(data);
    } catch {
      setMessage("There was a problem fetching your todos, Please try again!");
    }
  };

  const fetchUnfinishedTodos = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/todo-list-unfinished",
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();
      setTodos(data);
    } catch {
      setMessage("There was a problem fetching your todos, Please try again!");
    }
  };

  const closeMessage = () => {
    setMessage(null);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");

    if (!localStorage.getItem("todoListChoice"))
      localStorage.setItem("todoListChoice", "all"); // If nothing is there, we set it to all

    if (localStorage.getItem("todoListChoice") === "all") {
      fetchAllTodos();
    } else if (localStorage.getItem("todoListChoice") === "finished") {
      fetchFinishedTodos();
    } else if (localStorage.getItem("todoListChoice") === "unfinished") {
      fetchUnfinishedTodos();
    }
  }, [refresh]);

  return (
    <>
      <Navbar />
      <div id={classes["todos-list__container"]}>
        <div className={classes["todo-list-btns"]}>
          <button
            className={`${
              localStorage.getItem("todoListChoice") === "finished"
                ? classes["todo-btn--active"]
                : ""
            }`}
            onClick={() => {
              localStorage.setItem("todoListChoice", "finished");
              fetchFinishedTodos();
            }}
          >
            Finished
          </button>
          <button
            className={`${
              localStorage.getItem("todoListChoice") === "unfinished"
                ? classes["todo-btn--active"]
                : ""
            }`}
            onClick={() => {
              localStorage.setItem("todoListChoice", "unfinished");
              fetchUnfinishedTodos();
            }}
          >
            Unfinished
          </button>
          <button
            className={`${
              localStorage.getItem("todoListChoice") === "all"
                ? classes["todo-btn--active"]
                : ""
            }`}
            onClick={() => {
              localStorage.setItem("todoListChoice", "all");
              fetchAllTodos();
            }}
          >
            All
          </button>
        </div>
        {message && <Message message={message} closeMessage={closeMessage} />}
        {todos && <TodoList todos={todos} setRefresh={setRefresh} />}
      </div>
    </>
  );
};

export default TodosPage;
