import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav id={classes["navbar-container"]}>
      <section id={classes["navbar"]}>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/finished-todos">Finished</a>
        <a href="/unfinished-todos">Unfinished</a>
      </section>
    </nav>
  );
};

export default Navbar;
