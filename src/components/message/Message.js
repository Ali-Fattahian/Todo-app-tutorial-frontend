import classes from "./Message.module.css";

const Message = ({ message, closeMessage }) => {
  return (
    <div className={classes.message}>
      <p>{message}</p>
      <button onClick={() => closeMessage()}>X</button>
    </div>
  );
};

export default Message;
