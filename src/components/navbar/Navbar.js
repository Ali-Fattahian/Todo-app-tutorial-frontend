import classes from "./Navbar.module.css";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload()
  };

  return (
    <nav id={classes["navbar-container"]}>
      <section id={classes["navbar"]}>
        <a href="/">Home</a>
        {localStorage.getItem("token") ? (
          <p onClick={() => logout()}>Log out</p>
        ) : (
          <a href="/login">Log in</a>
        )}
        <a href="/finished-todos">Finished</a>
        <a href="/unfinished-todos">Unfinished</a>
      </section>
    </nav>
  );
};

export default Navbar;
