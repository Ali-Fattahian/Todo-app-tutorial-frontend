import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import classes from './Auth.module.css'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) { // Already logged in
      navigate('/')
    }
  },[])

  const sendAuthData = async (username, password) => {
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.status === 200) {
      const token = await response.json()
      localStorage.setItem('token', token)
      navigate('/')
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (username && password) {
      if (password.trim().length < 5) {
        console.log("Password is at least 5 characters long!");
      } else {
        sendAuthData(username, password);
      }
    } else {
      console.log("Please provide username and password");
    }
  };

  return (
    <>
      <Navbar />
      <form
        method="POST"
        onSubmit={formSubmitHandler}
        className={classes["auth-form"]}
      >
        <div className={classes["form-control"]}>
          <label htmlFor="login-username">USERNAME</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            id="login-username"
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="login-password">PASSWORD</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="login-password"
          />
        </div>
        <button type="submit">Login</button>
        <a href="/signup">Create an account</a>
      </form>
    </>
  );
};

export default LoginPage;
