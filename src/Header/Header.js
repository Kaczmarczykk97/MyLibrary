import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={classes["textContainer"]}>
        <h1>My Library Online</h1>
        <h2>Create Your Own Bookshelf</h2>
        <button>Start</button>
      </div>
    </header>
  );
}

export default Header;
