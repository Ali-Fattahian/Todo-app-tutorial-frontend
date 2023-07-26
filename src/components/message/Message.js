import classes from "./Message.module.css";

const Message = ({ message, closeMessage }) => {
  return (
    <div className={classes.message}>
      <p>{message}</p>
      <p className={classes['close-btn']} onClick={() => closeMessage()}>X</p>
    </div>
  );
};

export default Message;
