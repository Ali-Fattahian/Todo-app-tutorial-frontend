import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import classes from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import Message from "../../components/message/Message";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // Already logged in
      navigate("/");
    }
  }, []);

  const sendAuthData = async (username, password) => {
    try {
      const response = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.status === 200) {
        const token = await response.json();
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch {
      setMessage("Sign up failed, Please try again!");
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (username && password) {
      if (password.trim().length < 5) {
        setMessage("Password should be at least 5 characters long!");
      } else {
        sendAuthData(username, password);
      }
    } else {
      setMessage("Please provide username and password");
    }
  };

  const closeMessage = () => {
    setMessage(null);
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
          <label htmlFor="signup-username">USERNAME</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            id="signup-username"
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="signup-password">PASSWORD</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="signup-password"
          />
        </div>
        {message && <Message message={message} closeMessage={closeMessage} />}
        <button type="submit">Sign up</button>
        <a href="/login">I have an account</a>
      </form>
    </>
  );
};

export default SignupPage;
