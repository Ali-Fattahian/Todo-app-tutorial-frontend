import classes from "./Navbar.module.css";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload()
  };

  const token = localStorage.getItem('token')

  return (
    <nav id={classes["navbar-container"]}>
      <section id={classes["navbar"]}>
        {token && <a href="/">Home</a>}
        {token ? (
          <p onClick={() => logout()}>Log out</p>
        ) : (
          <a href="/login">Log in</a>
        )}
        {token && <a href="/finished-todos">Finished</a>}
        {token && <a href="/unfinished-todos">Unfinished</a>}
      </section>
    </nav>
  );
};

export default Navbar;
